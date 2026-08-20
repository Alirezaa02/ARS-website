import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TONE_STYLES = {
  teal: { icon: "border-accent/20 bg-accent/10 text-accent", bar: "via-accent" },
  blue: { icon: "border-accent-blue/20 bg-accent-blue/10 text-accent-blue", bar: "via-accent-blue" },
  warn: { icon: "border-amber-400/20 bg-amber-400/10 text-amber-400", bar: "via-amber-400" },
};

function StepIcon({ icon, tone }) {
  return (
    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${TONE_STYLES[tone].icon}`}>
      {icon}
    </div>
  );
}

function Connector({ tone, delay = 0 }) {
  return (
    <div className="relative mx-1 h-px flex-1 overflow-hidden bg-white/10 sm:mx-2">
      <motion.div
        className={`absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent ${TONE_STYLES[tone].bar} to-transparent`}
        initial={{ x: "-100%" }}
        whileInView={{ x: "300%" }}
        viewport={{ once: false }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, delay, ease: "easeInOut" }}
      />
    </div>
  );
}

// Alternates teal/blue for rhythm; a step can override with tone: "warn" for anything urgent/attention-worthy.
function toneFor(step, i) {
  return step.tone || (i % 2 === 0 ? "teal" : "blue");
}

export function WorkflowCard({ tag, title, description, details, steps, glow = "teal" }) {
  const [open, setOpen] = useState(false);
  const glowClass = glow === "blue" ? "bg-accent-blue/10" : "bg-accent/10";

  return (
    <div className="glass glass-hover relative overflow-hidden rounded-2xl p-6 md:p-7">
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${glowClass} blur-2xl`} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{tag}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">ARS</span>
        </div>

        <div className="mt-6 flex items-center">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2 text-center">
                <StepIcon icon={step.icon} tone={toneFor(step, i)} />
                <span className="max-w-[80px] text-xs leading-tight text-slate-400">{step.label}</span>
              </div>
              {i < steps.length - 1 && <Connector tone={toneFor(steps[i + 1], i + 1)} delay={i * 0.15} />}
            </div>
          ))}
        </div>

        <h3 className="mt-6 font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>

        {details && (
          <>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{details}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-3 flex items-center gap-1.5 text-sm text-accent hover:underline"
            >
              {open ? "Show less" : "How it works"}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
