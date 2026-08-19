import { useEffect } from "react";

const SITE = "https://www.arswebservices.com";

function setMeta(selector, attr, value) {
  const tag = document.querySelector(selector);
  if (tag) tag.setAttribute(attr, value);
}

export function useSEO({ title, description, path = "", noindex = false }) {
  useEffect(() => {
    if (!title) return;
    const url = `${SITE}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, path, noindex]);
}

export function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => script.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
}
