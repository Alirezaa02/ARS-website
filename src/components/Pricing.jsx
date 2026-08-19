import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";

const plans = [
  {
    name: "Starter",
    blurb: "For a solo operator who just needs to stop missing enquiries.",
    setup: "$990",
    monthly: "$200",
    features: [
      "Email & web-form AI agent",
      "One-tap Approve / Reject summaries",
      "Leads saved to your database",
      "Outlook email connection",
      "Email support",
    ],
  },
  {
    name: "Growth",
    blurb: "The full system for a busy business that lives and dies by its bookings.",
    setup: "$2,000",
    monthly: "$400",
    featured: true,
    features: [
      "Everything in Starter",
      "Missed-call phone AI agent",
      "Smart scheduling into Outlook calendar",
      "Priority setup & tuning",
      "Priority support",
    ],
  },
  {
    name: "Complete",
    blurb: "AI system plus a custom website built to feed it, done end to end.",
    setup: "$3,500",
    monthly: "$600",
    features: [
      "Everything in Growth",
      "Custom business website",
      "Website forms wired to your AI agent",
      "Ongoing updates & optimisation",
      "Dedicated support line",
    ],
  },
];

export default function Pricing({ compact = false }) {
  return (
    <section id="pricing" className={compact ? "section" : "pt-36 pb-24"}>
      <div className={compact ? "" : "mx-auto max-w-6xl px-6"}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Simple pricing that pays for itself in one saved job
          </h2>
          <p className="mt-4 text-slate-400">
            A one-off setup fee to build and tune everything around your business, then a
            flat monthly subscription. No lock-in, no surprises.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 ${
                  p.featured
                    ? "border-accent/40 bg-gradient-to-b from-accent/[0.1] to-transparent shadow-glow"
                    : "glass glass-hover"
                }`}
              >
                {p.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-950">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 min-h-[48px] text-sm text-slate-400">{p.blurb}</p>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-white">{p.monthly}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    + {p.setup} one-off setup
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className={`mt-8 w-full ${p.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  Get started
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-sm text-slate-500">
          Not sure which fits? <Link to="/book" className="text-accent hover:underline">Book a free demo</Link> and
          I'll recommend the right setup for your business.
        </Reveal>
      </div>
    </section>
  );
}
