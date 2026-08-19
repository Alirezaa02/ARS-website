import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";
import { useSEO } from "../lib/seo";
import { industries } from "../data/industries";

export default function Industries() {
  useSEO({
    title: "Industries — ARS",
    description:
      "AI customer service systems built for your industry — see how ARS helps trades and service businesses across Australia stop missing work.",
    path: "/industries",
  });

  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Industries</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Find your industry
          </h1>
          <p className="mt-4 text-slate-400">
            Every system is custom-built, but here's what that typically looks like for
            businesses like yours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.08}>
              <Link
                to={`/industries/${ind.slug}`}
                className="glass glass-hover block h-full rounded-2xl p-6 md:p-7"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {ind.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-white">{ind.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{ind.subheadline}</p>
                <span className="mt-4 inline-block text-sm text-accent">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center text-sm text-slate-500">
          Don't see your industry?{" "}
          <Link to="/contact" className="text-accent hover:underline">
            Get in touch
          </Link>{" "}
          — every system is custom-built regardless.
        </Reveal>
      </div>
    </section>
  );
}
