import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "www.arswebservices.com";
const KEY = "73deb9eadd454925a2fe4f0995c42006";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function urlsFromSitemap() {
  const xml = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  if (!process.env.VERCEL) {
    console.log("Skipping IndexNow ping (not running on Vercel).");
    return;
  }

  const urlList = urlsFromSitemap();
  console.log(`Pinging IndexNow with ${urlList.length} URLs...`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  if (res.ok) {
    console.log(`IndexNow submission accepted (${res.status}).`);
  } else {
    // Non-fatal — don't block the deploy over an indexing ping.
    console.warn(`IndexNow submission returned ${res.status}: ${await res.text().catch(() => "")}`);
  }
}

main().catch((err) => {
  console.warn("IndexNow ping failed (non-fatal):", err.message);
});
