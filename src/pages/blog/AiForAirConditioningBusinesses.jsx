import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "AI for Air Conditioning & HVAC Businesses: How It Actually Works";
const DESCRIPTION =
  "When temperatures spike, enquiries triple — and every missed call in peak season is a job that just went to someone else. Here's exactly what an AI system does for an air conditioning business, in plain English.";
const PATH = "/blog/ai-for-air-conditioning-businesses";
const DATE = "2026-10-08";

const faqs = [
  {
    q: "Can it actually handle a flood of calls during a heatwave?",
    a: "Yes — it scales the same whether it's 3 calls or 30 at once. Nobody waits on hold, and nothing falls through during your busiest week of the year.",
  },
  {
    q: "Does it help with ducted quotes, or just simple bookings?",
    a: "It captures the details upfront — property size, budget, existing system — and books a site assessment straight away, so you're not chasing back-and-forth before you can even quote.",
  },
  {
    q: "What about servicing on units installed years ago?",
    a: "It can send reminders when a unit's due for a service, so that repeat maintenance revenue doesn't just quietly stop because nobody got around to chasing it.",
  },
  {
    q: "Do I need to change my phone number or booking system?",
    a: "No. It's set up around what you already use — your existing phone number, calendar, and software — so there's nothing to migrate or relearn.",
  },
];

export default function AiForAirConditioningBusinesses() {
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
            AI for Air Conditioning & HVAC Businesses: How It Actually Works
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            When temperatures spike, enquiries triple. Every missed call in peak season isn't
            just a missed call — it's a job that just went to whoever else picked up. Here's
            what an AI system actually does for an air conditioning business, no jargon.
          </p>

          <h2 className={h2}>Peak season overwhelms the phones</h2>
          <p className={p}>
            You can't hire enough staff for the summer rush, and you shouldn't have to try. The
            problem isn't effort — it's that phone lines have a hard limit, and heatwaves don't
            arrive one call at a time.
          </p>

          <h2 className={h2}>Call overflow that scales with the heatwave</h2>
          <p className={p}>
            The AI answers every call instantly, whether that's 3 calls or 30 at once. No hold
            music, nothing missed, exactly when you need it most — your technicians stay focused
            on installs, not the phone.
          </p>

          <h2 className={h2}>Ducted quotes that don't drag on</h2>
          <p className={p}>
            Site visits, measurements, back-and-forth — by the time a quote's ready the old way,
            the customer's often gone with whoever was faster. The AI captures property size,
            budget, and system preferences upfront and books a site assessment straight away, so
            the quote process actually starts moving the moment they call.
          </p>

          <h2 className={h2}>Maintenance revenue that doesn't just disappear</h2>
          <p className={p}>
            Units installed years ago still need servicing, but nobody's chasing it. A reminder
            at the right interval brings that customer back on schedule automatically, instead of
            repeat business quietly drying up.
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
              See how it works for air conditioning
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A live example of the AI booking a site assessment on the spot — built
              specifically for HVAC & air conditioning businesses.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/air-conditioning" className="btn-primary">
                Air Conditioning
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
