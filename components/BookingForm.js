"use client";
import { useMemo, useState } from "react";
import { TOPICS, MAX_DAYS_AHEAD, slotLabel, istToday, addDays, slotsFor } from "@/lib/booking";

const field = "w-full rounded-lg border border-slate-400 bg-white p-3 text-base";
const label = "mb-1.5 block text-sm font-semibold";

export default function BookingForm() {
  const today = useMemo(istToday, []);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");
  const [sent, setSent] = useState(null);

  const dateError = "";

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    if (!date || dateError) { setError(dateError || "Please choose a date."); return; }
    if (!time) { setError("Please choose a time."); return; }
    const data = { ...Object.fromEntries(new FormData(form)), date, time };
    setStatus("sending");
    try {
      const res = await fetch("/api/book", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) { setError(out.error || "Something went wrong. Please try again."); setStatus("idle"); return; }
      setSent({ name: data.name, email: data.email, when: `${date} at ${slotLabel(time)} IST` });
      setStatus("sent");
    } catch {
      setError("Network problem. Please try again."); setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-8">
        <h2 className="text-2xl font-bold">Request received</h2>
        <p className="leading-relaxed text-muted">
          Thanks, {sent.name}. We received your request for <strong className="text-ink">{sent.when}</strong>.
          We will confirm the slot at {sent.email} within one business day.
        </p>
        <a href="/" className="mt-2 inline-flex min-h-[44px] w-fit items-center rounded-lg border border-slate-400 px-6 py-3 font-semibold hover:bg-line">Back to home</a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-6 md:p-8" noValidate>
      {/* Honeypot: hidden from people, filled by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-lg font-semibold">Your details</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="name" className={label}>Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
          <div><label htmlFor="email" className={label}>Work email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
          <div><label htmlFor="phone" className={label}>Phone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></div>
          <div><label htmlFor="company" className={label}>Company (optional)</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
        </div>
        <div><label htmlFor="topic" className={label}>What would you like to talk about?</label>
          <select id="topic" name="topic" required defaultValue="" className={field}>
            <option value="" disabled>Select a topic</option>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select></div>
        <div><label htmlFor="message" className={label}>Where does your team lose time or leads? (optional)</label>
          <textarea id="message" name="message" rows={4} className={field} /></div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-lg font-semibold">Pick a date and time</legend>
        <div className="max-w-xs"><label htmlFor="date" className={label}>Date</label>
          <input id="date" type="date" value={date} min={addDays(today, 1)} max={addDays(today, MAX_DAYS_AHEAD)}
            onChange={(e) => { setDate(e.target.value); setTime(""); }} className={field} aria-describedby="date-note" />
          <p id="date-note" className="mt-1.5 text-sm text-muted">Weekdays 9:00 PM to 12:00 AM, weekends 8:00 AM to 12:00 PM. All times are India Standard Time (IST).</p>
          {dateError && <p className="mt-1.5 text-sm font-medium text-red-700">{dateError}</p>}
        </div>

        {date && !dateError && (
          <div role="radiogroup" aria-label="Time" className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {slotsFor(date).map((s) => (
              <label key={s} className="cursor-pointer">
                <input type="radio" name="slot" value={s} checked={time === s} onChange={() => setTime(s)} className="peer sr-only" />
                <span className="flex min-h-[44px] items-center justify-center rounded-lg border border-slate-400 bg-white text-[15px] transition peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand hover:bg-line peer-checked:hover:bg-brand-dark">
                  {slotLabel(s)}
                </span>
              </label>
            ))}
          </div>
        )}
      </fieldset>

      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800">{error}</p>}

      <div className="flex flex-col gap-2">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex min-h-[44px] w-fit items-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Request this time"}
        </button>
        <p className="text-sm text-muted">This is a request. We confirm the slot by email within one business day.</p>
      </div>
    </form>
  );
}
