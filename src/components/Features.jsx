import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const Icon = ({ path }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
    <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    title: "Email & form agent",
    body: "Reads every enquiry, extracts the details, and sends you a clean summary with Approve / Reject in one tap.",
    icon: "M4 6h16v12H4zM4 7l8 6 8-6",
    span: "md:col-span-2",
  },
  {
    title: "Missed-call AI",
    body: "Answers calls you can't, takes the customer's details, and pings you instantly so nobody hangs up on a rival.",
    icon: "M5 4h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  },
  {
    title: "Smart scheduling",
    body: "Offers your real free slots, waits for the reply, and books it automatically.",
    icon: "M8 2v4M16 2v4M3 10h18M5 6h14v14H5z",
  },
  {
    title: "Every lead saved",
    body: "Nothing lives in your head or a sticky note. Each enquiry is stored, searchable, and yours.",
    icon: "M4 7c0-1.6 3.6-3 8-3s8 1.4 8 3-3.6 3-8 3-8-1.4-8-3zM4 7v10c0 1.6 3.6 3 8 3s8-1.4 8-3V7",
  },
  {
    title: "Works with Outlook",
    body: "Plugs into the email and calendar you already use. No new tools, no migration, no learning curve.",
    icon: "M12 3l9 4.5v9L12 21l-9-4.5v-9zM3 7.5L12 12l9-4.5M12 12v9",
    span: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">What it does</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          One quiet system doing the jobs you keep meaning to get to
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06} className={f.span || ""}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass glass-hover group h-full rounded-2xl p-6"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/5 transition-all group-hover:shadow-glow">
                <Icon path={f.icon} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
