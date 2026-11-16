import { chromium } from "playwright";
import sparticuzChromium from "@sparticuz/chromium";
import { preview } from "vite";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Vercel's build container is missing the system libraries Playwright's own
// downloaded Chromium needs to launch, so use the statically-linked
// serverless build there instead. Locally (macOS/Linux dev machines),
// Playwright's normal locally-installed Chromium works fine.
async function launchBrowser() {
  if (!process.env.VERCEL) return chromium.launch();
  return chromium.launch({
    args: sparticuzChromium.args,
    executablePath: await sparticuzChromium.executablePath(),
  });
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 4319;

function routesFromSitemap() {
  const xml = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

function outPathFor(route) {
  if (route === "/") return join(root, "dist", "index.html");
  return join(root, "dist", route.replace(/^\//, ""), "index.html");
}

async function main() {
  // "/" must be captured last: its output is written to dist/index.html, which
  // is also the SPA-fallback shell `vite preview` serves for every other route
  // before that route's own dist/<route>/index.html exists. Capturing "/" first
  // bakes its rendered <head> (including its FAQ JSON-LD) into that shared shell,
  // leaking it into every route captured afterwards.
  const routes = routesFromSitemap().sort((a, b) => (a === "/" ? 1 : b === "/" ? -1 : 0));
  console.log(`Prerendering ${routes.length} routes from sitemap.xml...`);

  const server = await preview({ root, preview: { port: PORT, strictPort: true } });
  const base = `http://localhost:${PORT}`;

  // The built index.html's static <title> is what every route's shell shows
  // immediately after navigation, before that route's own useSEO effect commits
  // — not just a placeholder for Home, since Home's own real title equals it.
  // Routes never render an <h1> (confirmed: /services, /pricing, /contact don't),
  // so "the title changed away from this default" is the one readiness signal
  // that holds for every route.
  const defaultTitle = readFileSync(join(root, "dist", "index.html"), "utf8").match(/<title>(.*?)<\/title>/)?.[1];

  const browser = await launchBrowser();
  const page = await browser.newPage();

  // Third-party widgets (Calendly) must not be allowed to actually initialize
  // during prerendering: it would create a live iframe addressed to this local
  // preview server's own origin, and that stale, wrongly-addressed iframe would
  // get baked verbatim into the static output. Real visitors get the widget
  // correctly via normal client-side hydration against the real production
  // origin — prerendering only needs the page's static text content.
  await page.route("https://assets.calendly.com/**", (route) => route.abort());
  await page.route("https://calendly.com/**", (route) => route.abort());

  const pageErrors = [];
  page.on("pageerror", (err) => pageErrors.push(err));

  try {
    for (const route of routes) {
      pageErrors.length = 0;
      await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      if (pageErrors.length > 0) {
        throw new Error(`Page error on ${route}: ${pageErrors[0]}`);
      }
      // networkidle alone doesn't guarantee the route's own content has
      // actually committed to the DOM yet — wait for its real title too
      // (skip for "/" itself, whose real title equals the default).
      if (route !== "/") {
        await page.waitForFunction((def) => document.title !== def, defaultTitle, { timeout: 10_000 });
      }
      let html = await page.content();
      // Defense in depth: strip any absolute reference to this transient local
      // server that still slipped into the captured HTML (e.g. a modulepreload
      // resource hint Vite's dynamic-import polyfill computes from the page's
      // live origin at render time) so nothing ships pointing at localhost.
      html = html.replaceAll(`http://localhost:${PORT}`, "");
      const outPath = outPathFor(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      console.log(`  ✓ ${route}`);
    }

    // A real 404: navigate to a path no route matches, capture the app's own
    // NotFound page, and write it to dist/404.html. Vercel serves this file
    // automatically, with a genuine 404 status, for any request that doesn't
    // match a real static file or the /api rewrite — once the SPA catch-all
    // rewrite is removed from vercel.json, unmatched/mistyped paths stop
    // soft-404ing as the homepage and get this page at a real 404 instead.
    pageErrors.length = 0;
    await page.goto(`${base}/__not_found__`, { waitUntil: "networkidle" });
    await page.waitForFunction((def) => document.title !== def, defaultTitle, { timeout: 10_000 });
    let notFoundHtml = await page.content();
    notFoundHtml = notFoundHtml.replaceAll(`http://localhost:${PORT}`, "");
    writeFileSync(join(root, "dist", "404.html"), notFoundHtml);
    console.log("  ✓ 404.html");
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }

  console.log(`Prerendered ${routes.length} routes.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
