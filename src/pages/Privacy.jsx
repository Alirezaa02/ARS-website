import { Reveal } from "../lib/motion";

const h2 = "mt-10 font-display text-xl font-semibold text-white";
const p = "mt-3 text-slate-400 leading-relaxed";
const ul = "mt-3 space-y-2 text-slate-400 leading-relaxed list-disc pl-5";

export default function Privacy() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated 15 August 2026</p>

          <p className={p}>
            This site is operated by Alireza Saeb, trading as ARS (ABN: 23 833 443 677),
            based in Brisbane, Queensland. This policy explains what personal information we
            collect through this website, why, and what we do with it.
          </p>

          <h2 className={h2}>What we collect</h2>
          <p className={p}>We collect information you give us directly, specifically:</p>
          <ul className={ul}>
            <li>
              <strong className="text-slate-300">Contact form</strong> — your name, email
              address, business name, and whatever message you send us.
            </li>
            <li>
              <strong className="text-slate-300">Booking a demo</strong> — when you book a call
              through our scheduling page, the booking widget (Calendly) collects your name,
              email, and appointment details directly. See their{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                privacy policy
              </a>{" "}
              for how they handle it.
            </li>
          </ul>
          <p className={p}>
            We do not use cookies or analytics tracking on this site. Our hosting provider
            (Vercel) automatically logs standard technical information for every visitor — such
            as IP address and browser type — purely for security and reliability, as is normal
            for any website host.
          </p>

          <h2 className={h2}>Why we collect it</h2>
          <p className={p}>
            Solely to respond to your enquiry, discuss whether ARS is a fit for your business,
            and — if you become a client — to deliver the service you've engaged us for. We
            don't use your information for anything else, and we don't sell it.
          </p>

          <h2 className={h2}>Who we share it with</h2>
          <p className={p}>
            We use a small number of service providers to run this site and respond to you:
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-slate-300">Resend</strong> — delivers contact form
              submissions to our inbox by email.
            </li>
            <li>
              <strong className="text-slate-300">Calendly</strong> — powers demo call bookings.
            </li>
            <li>
              <strong className="text-slate-300">Vercel</strong> — hosts this website.
            </li>
          </ul>
          <p className={p}>
            We don't sell or rent your information to anyone, and we don't share it beyond
            what's needed to run the service above.
          </p>

          <h2 className={h2}>How long we keep it</h2>
          <p className={p}>
            We keep enquiry and booking information for as long as reasonably needed to respond
            to you or, if you become a client, for the duration of our engagement plus normal
            Australian business record-keeping requirements.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p className={p}>
            You can ask us what information we hold about you, ask us to correct it, or ask us
            to delete it, at any time — just email{" "}
            <a href="mailto:saebalireza02@gmail.com" className="text-accent hover:underline">
              saebalireza02@gmail.com
            </a>
            .
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={p}>
            If what we collect or how we use it changes, we'll update this page and change the
            date at the top.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about this policy? Email{" "}
            <a href="mailto:saebalireza02@gmail.com" className="text-accent hover:underline">
              saebalireza02@gmail.com
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
