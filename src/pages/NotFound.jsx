import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";
import { useSEO } from "../lib/seo";

export default function NotFound() {
  useSEO({
    title: "Page not found — ARS",
    description: "The page you're looking for doesn't exist.",
    path: "",
    noindex: true,
  });

  return (
    <section className="grid min-h-screen place-items-center px-6 pt-24">
      <Reveal className="text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          That page doesn't exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The link might be broken, or the page may have moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </Reveal>
    </section>
  );
}
