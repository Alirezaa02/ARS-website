import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const perks = [
  "A 20-minute, no-pressure walkthrough",
  "See the AI capture and book a live enquiry",
  "A recommended setup and honest price for your business",
];

export default function BookDemo() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Book a demo</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              See it capture a lead <span className="h-grad">before you decide</span>
            </h1>
            <p className="mt-5 text-lg text-slate-400">
              Pick a time that suits and I'll show you exactly how ARS would handle
              enquiries for your business — using your real workflow, not a canned demo.
            </p>
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="glass mt-10 rounded-xl p-5">
              <p className="text-sm text-slate-400">
                Prefer to talk first? Reach me directly at{" "}
                <a href="mailto:hello@ars.com.au" className="text-accent hover:underline">
                  hello@ars.com.au
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Calendly embed placeholder — drop your real embed here */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-2 shadow-card"
            >
              <div className="grid min-h-[520px] place-items-center rounded-xl border border-dashed border-white/10 bg-ink-900/60 p-8 text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-accent/20 bg-accent/5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M8 2v4M16 2v4M3 10h18M5 6h14v14H5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Calendly booking widget
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                    Replace this placeholder with your Calendly inline embed. The dark
                    theme and rounded frame are already set up to match.
                  </p>
                  <code className="mt-5 inline-block rounded-lg bg-black/40 px-4 py-2 font-mono text-xs text-accent">
                    {'<div class="calendly-inline-widget" ... />'}
                  </code>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
