import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "AI for Plumbing Businesses: How It Actually Works in Australia";
const DESCRIPTION =
  "A burst pipe doesn't wait for business hours, and neither do your competitors. Here's exactly what an AI system does for a plumbing business — in plain English.";
const PATH = "/blog/ai-for-plumbing-businesses";
const DATE = "2026-09-02";

const faqs = [
  {
    q: "Does it actually know which calls are real emergencies?",
    a: "It's built to assess urgency from what the caller describes — a burst pipe or no hot water gets flagged straight to you, while routine jobs get booked for the next slot instead of waking you at 2am.",
  },
  {
    q: "Can it handle quote questions, not just bookings?",
    a: "Yes — it answers \"how much for a blocked drain\" style questions on your website, asks the right follow-ups, and sends you a qualified lead instead of a vague enquiry.",
  },
  {
    q: "What about invoice chasing?",
    a: "Overdue invoices get a polite, automatic reminder sequence before it ever needs an awkward phone call from you.",
  },
  {
    q: "Do I need to change my number or booking system?",
    a: "No — it's set up around what you already use, your existing phone number and calendar, so there's nothing to migrate.",
  },
];

export default function AiForPlumbingBusinesses() {
  useSEO({ title: TITLE, description: DESCRIPTION, path: PATH });

  useJsonLd("article-schema", {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: DATE,
    dateModified: DATE,
    author: { "@type": "Person", name: "Alireza Saeb" },
    publisher: { "@type": "Organization", name: "ARS", url: "https://www.arswebservices.com" },
    mainEntityOfPage: `https://www.arswebservices.com${PATH}`,
  });

  useJsonLd("faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });

  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link to="/blog" className="text-sm text-slate-500 hover:text-accent">
            ← Back to blog
          </Link>
          <span className="eyebrow mt-6 block w-fit">Guide</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI for Plumbing Businesses: How It Actually Works in Australia
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            A burst pipe doesn't check the time before it floods a kitchen. Emergency jobs go to
            whoever answers the phone first, and if that's not you, it's whoever's next on the
            list. Here's what an AI system actually does for a plumbing business — no jargon.
          </p>

          <h2 className={h2}>The problem isn't skill, it's speed to answer</h2>
          <p className={p}>
            Miss the call, and it's already booked with someone else. That's true for a burst
            pipe at 2am just as much as a blocked drain on a Tuesday afternoon — plumbing has
            more genuine emergencies than most trades, and whoever picks up first usually wins
            the job.
          </p>

          <h2 className={h2}>24/7 AI call answering</h2>
          <p className={p}>
            Every call gets answered straight away, day or night. The AI captures the job type
            and address, then books it into your calendar — working the same at 2am as it does
            at 2pm.
          </p>

          <h2 className={h2}>Emergency triage that actually protects your sleep</h2>
          <p className={p}>
            After-hours calls get triaged for urgency. Genuine emergencies — a burst pipe, no
            hot water — go straight to you. Routine jobs get booked for the next available slot
            instead of waking you up for something that can wait until morning.
          </p>

          <h2 className={h2}>Quote questions, handled on your website</h2>
          <p className={p}>
            "How much to fix a blocked drain?" — the AI handles that on your website, asks the
            right follow-up questions, and sends you a qualified lead instead of a browser who
            never actually calls.
          </p>

          <h2 className={h2}>Quotes and invoices that follow up on their own</h2>
          <p className={p}>
            Once a quote's sent, an automatic follow-up sequence runs until the customer books
            or declines — no hot lead left to go cold because you got busy on another job. The
            same goes for overdue invoices: a polite, automatic reminder sequence runs before it
            ever needs an awkward phone call from you.
          </p>

          <h2 className={h2}>Reviews, asked for at the right moment</h2>
          <p className={p}>
            Job marked done, and the customer gets a text asking for a review while it's still
            fresh — not days later once they've forgotten how quickly the problem was sorted.
          </p>

          <h2 className={h2}>What it costs</h2>
          <p className={p}>
            ARS plans start at <strong className="text-slate-300">$150/month with a $990
            one-off setup</strong>, no per-call charge and no lock-in, typically live in{" "}
            <strong className="text-slate-300">2–4 weeks</strong>.
          </p>

          <h2 className={h2}>Frequently asked questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-base font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="glass mt-12 rounded-2xl p-6 text-center md:p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              See how it works for plumbers
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A live example of the AI answering an emergency call and triaging it — built
              specifically for plumbing businesses.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/plumbing" className="btn-primary">
                Plumbing
              </Link>
              <Link to="/book" className="btn-ghost">
                Book a free demo
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
