import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";
import { WorkflowCard } from "./WorkflowDiagram";
import { howItWorks } from "../../data/industries";
import Aurora from "../Aurora";

export default function IndustryPageTemplate({ industry }) {
  const {
    slug,
    category,
    name,
    headline,
    headlineAccent,
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
    <div className="pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <Aurora />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {category} · {name}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {headlineAccent ? (
                <>
                  {headline.split(headlineAccent)[0]}
                  <span className="h-grad">{headlineAccent}</span>
                  {headline.split(headlineAccent)[1]}
                </>
              ) : (
                headline
              )}
            </h1>
            <p className="mt-6 font-display text-xl font-semibold text-accent md:text-2xl">
              {subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/book" className="btn-primary">
                Book a free demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
        </div>
      </section>

      {/* Challenges */}
      <section className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The reality</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            What holds {name} businesses back
          </h2>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="glass glass-hover h-full rounded-2xl p-6"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/10 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workflows */}
      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl" />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <span className="eyebrow">What ARS can build</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built for {name.toLowerCase()}, not off the shelf
          </h2>
          <p className="mt-4 text-slate-400">
            Every system is custom-built for your business — these are examples of the kind
            of automation that's possible.
          </p>
        </Reveal>
        <div className="relative mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
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
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
            <span className="eyebrow">Integrations</span>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Built to connect with what you already use
            </h2>
            <p className="mt-4 text-slate-400">
              ARS is built around your existing setup — no forced migration. A few tools we
              commonly connect to:
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
          <span className="eyebrow">Worth knowing</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Why {name.toLowerCase()} businesses are looking at this now
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

      {/* How it works — vertical spine, matches the sitewide pattern */}
      <section className="section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            From first chat to live system
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/5 md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="h-full w-px bg-gradient-to-b from-accent via-accent-blue to-transparent"
            />
          </div>
          <div className="space-y-5">
            {howItWorks.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group flex gap-6">
                  <div className="relative z-10 hidden md:block">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-ink-900 font-mono text-sm text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-glow">
                      {s.n}
                    </div>
                  </div>
                  <div className="glass glass-hover flex-1 rounded-2xl p-6">
                    <div className="mb-2 font-mono text-xs text-accent md:hidden">{s.n}</div>
                    <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-ink-800/40 to-transparent p-10 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent-blue/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              See it handle a real enquiry for your business
            </h2>
            <Link to="/book" className="btn-primary mt-8">
              Book a free demo
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
