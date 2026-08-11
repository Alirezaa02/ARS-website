import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aurora from "./Aurora";
import Counter from "./Counter";
import { fadeUp, stagger } from "../lib/motion";

const stats = [
  { display: "24/7", label: "Always answering" },
  { value: 2, suffix: " min", label: "Avg. reply time" },
  { value: 100, suffix: "%", label: "Leads captured" },
];

// The signature element: a live-feeling capture card, the product's actual job.
function PipelinePanel() {
  const steps = [
    { tag: "New enquiry", text: "“Do you do emergency callouts on weekends?”", meta: "Web form · 0s ago" },
    { tag: "Details captured", text: "Sarah M. · 0412 xxx xxx · Ashgrove", meta: "Extracted automatically" },
    { tag: "Ready to book", text: "Sat 9:00am · Sat 1:30pm · Sun 10:00am", meta: "Sent to customer" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative w-full rounded-2xl p-1.5 shadow-card"
      style={{ perspective: 1000 }}
    >
      <div className="rounded-xl bg-ink-900/80 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              ARS agent · live
            </span>
          </div>
          <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
            Outlook connected
          </span>
        </div>

        <div className="space-y-2.5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.35, duration: 0.5 }}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  {s.tag}
                </span>
                <span className="font-mono text-[10px] text-slate-500">{s.meta}</span>
              </div>
              <p className="text-sm text-slate-200">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          className="mt-4 flex gap-2"
        >
          <button className="flex-1 rounded-lg bg-accent py-2 text-sm font-medium text-ink-950 transition hover:shadow-glow">
            Approve &amp; book
          </button>
          <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5">
            Reject
          </button>
        </motion.div>
      </div>

      <div className="animate-float absolute -right-4 -top-4 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 backdrop-blur-xl sm:block">
        <p className="font-mono text-[10px] text-slate-400">Booking confirmed</p>
        <p className="text-sm font-semibold text-white">Sat 9:00am ✓</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <Aurora />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI customer service · Built in Brisbane
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Never miss a customer,
            <br />
            <span className="h-grad">even when you're on the tools.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            ARS builds you an AI team-member that reads every email, answers missed
            calls, captures the lead, and books the job — straight into the Outlook
            calendar you already use. You just tap approve.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/book" className="btn-primary">
              Book a free demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/services" className="btn-ghost">
              See how it works
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-white md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} display={s.display} />
                </div>
                <div className="mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <PipelinePanel />
      </div>
    </section>
  );
}
