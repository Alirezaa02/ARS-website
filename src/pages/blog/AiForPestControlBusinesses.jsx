import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "AI for Pest Control Businesses: How It Actually Works in Australia";
const DESCRIPTION =
  "Rats in the kitchen at 10pm means calling the first three pest controllers on Google. Here's exactly what an AI system does for a pest control business — in plain English.";
const PATH = "/blog/ai-for-pest-control-businesses";
const DATE = "2026-09-29";

const faqs = [
  {
    q: "Does it actually know which calls are genuine emergencies?",
    a: "It's built to assess urgency from what the caller describes — a rodent sighting in a kitchen tonight gets flagged straight to you, while routine termite or ant enquiries get booked for the next available slot.",
  },
  {
    q: "Can it handle the repeat questions — termites, cockroaches, rodents?",
    a: "Yes — it handles the \"how much for a termite inspection\" style questions on your website, gives an indicative price, and books the job before they check a competitor.",
  },
  {
    q: "Does it remind customers about annual inspections?",
    a: "It sends a reminder at the 12-month mark for termite inspections and periodic treatments automatically — recurring revenue that otherwise just quietly stops.",
  },
  {
    q: "Do I need to change my phone number or booking system?",
    a: "No. It's set up around what you already use — your existing phone number, calendar, and software — so there's nothing to migrate or relearn.",
  },
];

export default function AiForPestControlBusinesses() {
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
            AI for Pest Control Businesses: How It Actually Works in Australia
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            Rats in the kitchen at 10pm means calling the first three pest controllers on
            Google. Whoever picks up wins the job — price barely comes into it. Here's what an
            AI system actually does for a pest control business, no jargon.
          </p>

          <h2 className={h2}>Speed to answer beats everything else</h2>
          <p className={p}>
            Pest control is a speed-to-lead business. When someone's found cockroaches in the
            kitchen, they're calling multiple businesses in a row until someone picks up.
            Whoever answers first usually wins, regardless of price.
          </p>

          <h2 className={h2}>24/7 call answering and emergency triage</h2>
          <p className={p}>
            Every call gets answered instantly, day or night. The AI captures the pest type and
            property details, then books the job or escalates genuine emergencies straight to
            you — a rodent in the kitchen tonight gets flagged; a routine ant problem gets
            booked for the next slot.
          </p>

          <h2 className={h2}>The same questions, answered automatically</h2>
          <p className={p}>
            "How much for a termite inspection?" — the AI handles that on your website, gives
            an indicative price, and books the job before they check a competitor's site
            instead.
          </p>

          <h2 className={h2}>Recurring revenue that runs itself</h2>
          <p className={p}>
            Annual inspections and quarterly treatments are revenue you already earned once.
            Most customers won't call back on their own — a reminder at the 12-month mark
            brings them back on schedule automatically, instead of that repeat business quietly
            disappearing.
          </p>

          <h2 className={h2}>Quotes followed up, warranties tracked</h2>
          <p className={p}>
            An inspection quote gets sent, then a follow-up sequence runs on its own until the
            customer books or declines — no hot lead left to go cold. Treatments under warranty
            get logged automatically too, so a re-treatment request never gets lost in the
            paperwork.
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
              See how it works for pest control
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A live example of the AI booking an urgent job on the spot — built specifically
              for pest control businesses.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/pest-control" className="btn-primary">
                Pest Control
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
