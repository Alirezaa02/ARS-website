import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const steps = [
  {
    n: "01",
    title: "A customer reaches out",
    body: "An email lands, a web form is filled in, or a call goes unanswered. Whatever the channel, ARS is already listening.",
  },
  {
    n: "02",
    title: "The AI captures everything",
    body: "It reads the message, pulls out the name, number, and what they need, and saves the lead to your database — nothing slips through.",
  },
  {
    n: "03",
    title: "You get a one-tap summary",
    body: "A tidy summary hits your inbox with Approve and Reject buttons. No dashboards to learn, no apps to check.",
  },
  {
    n: "04",
    title: "The job books itself",
    body: "Approve it, and ARS offers your real free slots, waits for the reply, and drops the booking into your Outlook calendar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          From enquiry to booked job, on autopilot
        </h2>
        <p className="mt-4 text-slate-400">
          Four steps run quietly in the background. You stay in control — the AI just
          does the chasing, typing, and scheduling for you.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* progress spine */}
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

        <div className="space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group flex gap-6 rounded-2xl md:pl-0">
                <div className="relative z-10 hidden md:block">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-ink-900 font-mono text-sm text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-glow">
                    {s.n}
                  </div>
                </div>
                <div className="glass glass-hover flex-1 rounded-2xl p-6 md:p-7">
                  <div className="mb-2 font-mono text-xs text-accent md:hidden">{s.n}</div>
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
