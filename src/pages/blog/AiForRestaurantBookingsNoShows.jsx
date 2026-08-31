import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "How Restaurants Are Using AI to Stop Losing Tables to No-Shows";
const DESCRIPTION =
  "Missed calls during service and no-shows both cost restaurants real revenue. Here's how AI reservation answering and reminders fix both — in plain English.";
const PATH = "/blog/ai-for-restaurant-bookings-no-shows";
const DATE = "2026-08-31";

const faqs = [
  {
    q: "Does the AI take bookings over the phone, or just online?",
    a: "Both. It answers calls directly during service, and can work through your website or booking widget too — the booking gets captured the same way either way.",
  },
  {
    q: "What happens if a table cancels last minute?",
    a: "The automatic reminder catches most cancellations early enough to try re-booking the table, instead of it just sitting empty for the night.",
  },
  {
    q: "Does it handle function and event enquiries too?",
    a: "Yes. It asks for the date, headcount, and budget upfront, then sends it to you as a briefed, ready-to-quote lead instead of a back-and-forth over messages.",
  },
  {
    q: "Will it replace my front-of-house staff?",
    a: "No — it's built to take the phone off their hands during service, not replace them. Anything that genuinely needs a person still gets routed to one.",
  },
];

export default function AiForRestaurantBookingsNoShows() {
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
            How Restaurants Are Using AI to Stop Losing Tables to No-Shows
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            Every restaurant loses revenue two ways: the call that rings out during a busy
            service, and the table that gets held for someone who never turns up. Neither is a
            staffing problem — it's a timing problem. Here's how AI is closing both gaps.
          </p>

          <h2 className={h2}>The call you didn't answer went somewhere else</h2>
          <p className={p}>
            During a full dinner service, nobody's free to grab the phone — and a caller who
            doesn't get through usually doesn't call back. They book the place next door that
            did answer. That's a table lost before it was ever on the books.
          </p>

          <h2 className={h2}>24/7 AI reservation answering</h2>
          <p className={p}>
            An AI system answers every call, day or night — during a full service exactly the
            same as 3pm on a quiet Tuesday. It checks the time's actually free, takes the
            booking, and confirms it straight away, without pulling anyone off the floor.
          </p>

          <h2 className={h2}>Cutting no-shows with automatic reminders</h2>
          <p className={p}>
            A held table with no reminder is a coin flip. An automatic reminder goes out before
            every booking, with a one-tap way to confirm or cancel. If someone's not coming,
            you find out early enough to actually re-book the table — instead of writing it off
            for the night.
          </p>

          <h2 className={h2}>Function and event enquiries, qualified upfront</h2>
          <p className={p}>
            Group bookings usually mean chasing details over a few messages — date, headcount,
            budget, dietary needs. AI asks the right questions upfront and sends the enquiry
            through to you already qualified and ready to quote.
          </p>

          <h2 className={h2}>Freeing up the floor</h2>
          <p className={p}>
            Opening hours, dietary questions, parking, menu queries — these get answered
            automatically instead of pulling staff off tables to answer the phone. For venues
            that take phone orders, the same system captures the order accurately and confirms
            it back, even during a noisy rush.
          </p>

          <h2 className={h2}>Turning a good night into a review</h2>
          <p className={p}>
            After a booking, the customer gets an automatic prompt to leave a Google review
            while the visit's still fresh — no one on the floor has to remember to ask.
          </p>

          <h2 className={h2}>Is it worth it?</h2>
          <p className={p}>
            One re-booked no-show or one after-hours reservation that didn't slip through
            usually covers the monthly cost on its own. ARS plans for a system like this start
            at <strong className="text-slate-300">$150/month with a $990 one-off setup</strong>,
            with no per-call charge and no lock-in — and typically go live in{" "}
            <strong className="text-slate-300">2–4 weeks</strong>.
          </p>

          <div className="glass mt-12 rounded-2xl p-6 text-center md:p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              See how it works for restaurants
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A dedicated breakdown of reservation answering, no-show reminders, and function
              enquiries — built specifically for restaurants and cafes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/restaurants" className="btn-primary">
                Restaurants & Cafes
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
