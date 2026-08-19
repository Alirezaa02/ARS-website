import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";

const services = [
  {
    tag: "AI system",
    title: "AI Customer Service System",
    body: "A complete AI team-member that handles enquiries across email, web forms, and phone — capturing leads, summarising them for your approval, and booking jobs into your calendar.",
    points: [
      "Email & web-form agent with one-tap Approve / Reject",
      "Phone AI that answers missed calls and takes details",
      "Smart scheduling that books straight into Outlook",
      "Every lead saved to your own database",
      "Set up around your existing tools — no migration",
    ],
    featured: true,
  },
  {
    tag: "Websites",
    title: "Custom Business Websites",
    body: "A fast, modern website that actually brings work in — designed around your brand, built up to 12 pages, and wired to feed straight into your AI customer service system if you use both.",
    points: [
      "Clean, mobile-first design built to convert — up to 12 pages",
      "Custom logo design included",
      "Google Business Profile set up for you",
      "Basic SEO — meta tags, sitemap, structured data",
      "Business email set up on your own domain",
      "Enquiry forms that plug directly into your AI agent",
    ],
  },
];

export default function Services() {
  return (
    <section className="section">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Services</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Two ways ARS helps you win more work
        </h2>
        <p className="mt-4 text-slate-400">
          A new website, the AI system, or both together — everything's built for you and
          tuned to how your business already runs.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`relative h-full overflow-hidden rounded-2xl border p-8 ${
                s.featured
                  ? "border-accent/30 bg-gradient-to-br from-accent/[0.08] to-transparent"
                  : "glass"
              }`}
            >
              {s.featured && (
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              )}
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {s.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/book" className={`mt-8 ${s.featured ? "btn-primary" : "btn-ghost"}`}>
                Book a demo
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
