"use client";
import { useEffect, useState } from "react";
import ChatDemo from "./ChatDemo";
import WorkflowDemo from "./WorkflowDemo";

const tabs = [
  { id: "flow", label: "Integration", View: WorkflowDemo },
  { id: "chat", label: "Assistant", View: ChatDemo },
];

// Alternates between a software example and an AI example until the visitor picks one.
export default function HeroVisual() {
  const [i, setI] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % tabs.length), 12000);
    return () => clearInterval(t);
  }, [manual]);

  const { View } = tabs[i];
  return (
    <div>
      <div role="tablist" aria-label="Examples" className="mb-4 flex gap-2">
        {tabs.map((t, n) => (
          <button key={t.id} role="tab" aria-selected={n === i} onClick={() => { setI(n); setManual(true); }}
            className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold transition ${n === i ? "bg-brand text-white" : "text-slate-300 hover:bg-night-card"}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel"><View key={tabs[i].id} /></div>
    </div>
  );
}
