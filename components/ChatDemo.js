"use client";
import { useEffect, useState } from "react";

const script = [
  { from: "user", text: "What is the refund window for annual plans?" },
  { from: "bot", text: "Annual plans can be refunded within 14 days of purchase.", source: "Source: Refund-Policy.pdf, page 2" },
  { from: "user", text: "And for monthly plans?" },
  { from: "bot", text: "I could not find that in your documents. I have passed this to your support team with a summary." },
];

export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(script.length); return; }
    let t;
    const next = (i) => {
      if (i >= script.length) { t = setTimeout(() => { setShown(0); next(0); }, 5000); return; }
      const bot = script[i].from === "bot";
      if (bot) setTyping(true);
      t = setTimeout(() => { setTyping(false); setShown(i + 1); next(i + 1); }, bot ? 1400 : 1000);
    };
    next(0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col gap-3" aria-label="Illustrative example of a knowledge assistant">
      <div className="flex min-h-[250px] flex-col gap-3">
        {script.slice(0, shown).map((m, i) => (
          <div key={i} className={`msg max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${m.from === "user" ? "self-end bg-brand text-white" : "self-start bg-night-card text-slate-200"}`}>
            {m.text}
            {m.source && <div className="mt-1 text-xs text-teal">{m.source}</div>}
          </div>
        ))}
        {typing && (
          <div className="self-start rounded-2xl bg-night-card px-4 py-3" aria-hidden="true">
            <span className="dot" /><span className="dot" style={{ animationDelay: "0.15s" }} /><span className="dot" style={{ animationDelay: "0.3s" }} />
          </div>
        )}
      </div>
      <p className="text-xs text-slate-400">Illustrative example of a knowledge assistant we build</p>
    </div>
  );
}
