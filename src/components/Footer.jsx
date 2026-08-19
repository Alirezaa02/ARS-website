import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-ink-800/40 to-transparent p-10 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent-blue/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stop letting good jobs slip through the cracks
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-300">
              Book a free demo and watch ARS capture a live enquiry from start to booked.
            </p>
            <Link to="/book" className="btn-primary mt-8">
              Book a free demo
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="" aria-hidden="true" className="h-8 w-8" />
              <span className="font-display text-lg font-semibold text-white">
                ARS<span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              AI customer service systems and websites for Australian small businesses.
              Built in Brisbane by Ali.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/arswebservices"
                target="_blank"
                rel="noreferrer"
                aria-label="ARS on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="8" cy="8" r="1.1" fill="currentColor" />
                  <path d="M8 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M12.5 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/arswebservices"
                target="_blank"
                rel="noreferrer"
                aria-label="ARS on Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="text-slate-400 hover:text-accent">AI system</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-accent">Websites</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-accent">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/book" className="text-slate-400 hover:text-accent">Book a demo</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">Get in touch</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:saebalireza02@gmail.com" className="text-slate-400 hover:text-accent">saebalireza02@gmail.com</a></li>
                <li><a href="tel:+61424853125" className="text-slate-400 hover:text-accent">0424 853 125</a></li>
                <li><span className="text-slate-400">Brisbane, AU</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} ARS. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-accent">Privacy</Link>
              <Link to="/terms" className="hover:text-accent">Terms</Link>
              <span>Made in Brisbane · Never miss a lead again.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
