"use client";
import { useEffect, useState } from "react";

const steps = [
  "New order arrives from your website",
  "Stock is checked in your inventory system",
  "Invoice is created in your accounting tool",
  "Customer gets a WhatsApp confirmation",
];

export default function WorkflowDemo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setActive(steps.length); return; }
    const t = setInterval(() => setActive((a) => (a >= steps.length + 1 ? 0 : a + 1)), 1300);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col gap-3" aria-label="Illustrative example of a system integration">
      <ol className="flex min-h-[250px] flex-col justify-center gap-3">
        {steps.map((s, i) => {
          const done = active > i;
          return (
            <li key={s} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[15px] transition-colors duration-500 ${done ? "border-teal bg-night-card text-white" : "border-night-line text-slate-400"}`}>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-500 ${done ? "bg-teal text-night" : "bg-night-line text-slate-400"}`}>
                {done ? <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M4 10l4 4 8-8" /></svg> : i + 1}
              </span>
              {s}
            </li>
          );
        })}
      </ol>
      <p className="text-xs text-slate-400">Illustrative example of a system integration we build</p>
    </div>
  );
}
