import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";
import { WorkflowCard } from "./WorkflowDiagram";
import { howItWorks } from "../../data/industries";

export default function IndustryPageTemplate({ industry }) {
  const {
    slug,
    category,
    name,
    headline,
    subheadline,
    intro,
    typicalTimeline,
    challenges,
    workflows,
    toolsExamples,
    whyNow,
  } = industry;

  const path = `/industries/${slug}`;
  const title = `${headline} | ARS`;
  const description = `${subheadline} ARS builds custom AI customer service systems for ${name.toLowerCase()} businesses in Australia.`;

  useSEO({ title, description, path });

  useJsonLd(`industry-schema-${slug}`, {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AI Customer Service for ${name}`,
    description,
    areaServed: "AU",
    provider: { "@type": "Organization", name: "ARS", url: "https://www.arswebservices.com" },
  });

  return (
    <div className="pt-36 pb-24">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="eyebrow">
            Industry · {category} · {name}
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-accent md:text-2xl">
            {subheadline}
          </p>
          <p className="mt-5 max-w-2xl text-slate-400 leading-relaxed">{intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/book" className="btn-primary">
              Book a free demo
            </Link>
            <Link to="/services" className="btn-ghost">
              All services
            </Link>
          </div>

          {typicalTimeline && (
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-500">
              {typicalTimeline}
            </p>
          )}
        </Reveal>
      </section>

      {/* Challenges */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The challenge</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            What holds {name} businesses back
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workflows */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What ARS can build</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            What ARS builds for {name} businesses
          </h2>
          <p className="mt-4 text-slate-400">
            Every system is custom-built for your business — these are examples of the kind
            of automation that's possible.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {workflows.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <WorkflowCard {...w} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tools */}
      {toolsExamples?.length > 0 && (
        <section className="section">
          <Reveal className="mx-auto max-w-3xl">
            <span className="eyebrow">Integrations</span>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Built to connect with the tools you already use
            </h2>
            <p className="mt-4 text-slate-400">
              ARS is custom-built around your existing setup — no forced migration. Examples
              of tools we commonly connect to:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {toolsExamples.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Why now */}
      <section className="section">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow">The opportunity</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Why {name} businesses are exploring AI now
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {whyNow.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            From first chat to live system
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-5">
                <span className="font-mono text-xs text-accent">{s.step}</span>
                <h3 className="mt-2 font-display text-sm font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal className="glass rounded-3xl p-10 text-center md:p-14">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            See it handle a real enquiry for your {name.toLowerCase()} business
          </h2>
          <Link to="/book" className="btn-primary mt-8 inline-flex">
            Book a free demo
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
