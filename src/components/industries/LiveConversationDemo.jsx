import { useEffect, useRef, useState } from "react";

function useTypedText(text, { start, speed = 22 } = {}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return undefined;
    setOutput("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);

  return { output, done };
}

export default function LiveConversationDemo({ demo }) {
  const stageRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const customer = useTypedText(demo.customerMessage, { start: play });
  const ai = useTypedText(demo.aiMessage, { start: play && customer.done, speed: 20 });

  useEffect(() => {
    if (!ai.done) {
      setShowConfirm(false);
      return undefined;
    }
    const t = setTimeout(() => setShowConfirm(true), 350);
    return () => clearTimeout(t);
  }, [ai.done]);

  const replay = () => {
    setPlay(false);
    setShowConfirm(false);
    setRunId((k) => k + 1);
    requestAnimationFrame(() => setPlay(true));
  };

  return (
    <div ref={stageRef} className="glass mx-auto w-full max-w-md overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#05070d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v12H7l-3 3V4z" />
            </svg>
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-white">{demo.label}</div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Answering live
            </div>
          </div>
        </div>
      </div>

      <div key={runId} className="min-h-[200px] space-y-3 px-6 pb-2 pt-6">
        <div
          className={`flex justify-end transition-all duration-500 ${
            play ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="max-w-[80%] rounded-2xl rounded-br-sm border border-white/10 bg-ink-800 px-4 py-2.5 text-sm text-white">
            {customer.output}
            {play && !customer.done && (
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-white align-middle" />
            )}
          </div>
        </div>
        <div
          className={`flex justify-start transition-all duration-500 ${
            customer.done ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-accent/20 bg-accent/[0.08] px-4 py-2.5 text-sm text-accent-glow">
            {ai.output}
            {customer.done && !ai.done && (
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-accent align-middle" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`mx-6 mb-6 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] to-accent-blue/[0.05] px-5 py-4 transition-all duration-500 ${
          showConfirm
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent">
          <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-accent">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#05070d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          {demo.confirmTitle}
        </div>
        <div className="mt-2 font-display text-base font-semibold text-white">{demo.confirmSubject}</div>
        <div className="mt-0.5 text-sm text-slate-400">{demo.confirmDetails}</div>
      </div>

      <div className="flex justify-center border-t border-white/5 py-3">
        <button
          type="button"
          onClick={replay}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <path d="M21 3v6h-6" />
          </svg>
          Replay
        </button>
      </div>
    </div>
  );
}
