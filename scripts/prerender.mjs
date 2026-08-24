import { chromium } from "playwright";
import { preview } from "vite";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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
  const routes = routesFromSitemap();
  console.log(`Prerendering ${routes.length} routes from sitemap.xml...`);

  const server = await preview({ root, preview: { port: PORT, strictPort: true } });
  const base = `http://localhost:${PORT}`;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pageErrors = [];
  page.on("pageerror", (err) => pageErrors.push(err));

  try {
    for (const route of routes) {
      pageErrors.length = 0;
      await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      if (pageErrors.length > 0) {
        throw new Error(`Page error on ${route}: ${pageErrors[0]}`);
      }
      const html = await page.content();
      const outPath = outPathFor(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      console.log(`  ✓ ${route}`);
    }
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
