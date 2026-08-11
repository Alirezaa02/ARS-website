import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const quotes = [
  {
    quote:
      "I was losing jobs every time I couldn't get to the phone on site. Now every missed call comes back to me as a lead, ready to book. Haven't dropped one since.",
    name: "Placeholder Client",
    role: "Plumbing · Brisbane",
    initials: "PC",
  },
  {
    quote:
      "The summaries land in my inbox and I just tap approve between jobs. It genuinely feels like I hired someone to run the office — for a fraction of the cost.",
    name: "Placeholder Client",
    role: "Electrical · Gold Coast",
    initials: "PC",
  },
  {
    quote:
      "Enquiries used to sit unanswered till the weekend. Now they're captured and booked the same hour. My calendar's fuller than it's ever been.",
    name: "Placeholder Client",
    role: "Landscaping · Ipswich",
    initials: "PC",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">In their words</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Built for businesses that can't sit by a screen
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <motion.figure
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="glass glass-hover flex h-full flex-col rounded-2xl p-7"
            >
              <div className="mb-4 text-accent">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
                  <path d="M9 7H6a3 3 0 00-3 3v7h7v-7H6a1 1 0 011-1h2zm9 0h-3a3 3 0 00-3 3v7h7v-7h-4a1 1 0 011-1h2z" />
                </svg>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-blue font-mono text-xs font-bold text-ink-950">
                  {q.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{q.name}</div>
                  <div className="text-xs text-slate-500">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 text-center text-xs text-slate-600">
        Placeholder testimonials — swap in real client quotes as you land them.
      </Reveal>
    </section>
  );
}
