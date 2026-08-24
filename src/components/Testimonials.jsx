import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const steps = [
  "Customer enquiry comes in through the website or a phone call",
  "AI checks real calendar availability and sends a measurement time to the customer",
  "Once measurements are confirmed, it connects straight to the quoting app",
  "A quote is generated and sent automatically — no manual back-and-forth",
];

export default function Testimonials() {
  return (
    <section className="section">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Real work</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Built for businesses that can't sit by a screen
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="glass glass-hover rounded-2xl p-8"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-white">
              <a
                href="https://atlasblindandcurtain.com.au/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Atlas Blinds &amp; Curtains
              </a>
            </h3>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              Custom AI agent
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">Blinds &amp; curtains installer</p>

          <ol className="mt-6 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>
      </Reveal>
    </section>
  );
}
