import { Resend } from "resend";
import { TOPICS, MAX_DAYS_AHEAD, slotLabel, istToday, addDays, slotsFor } from "@/lib/booking";

export const runtime = "nodejs";

const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }

  if (b.website) return Response.json({ ok: true }); // honeypot: bots fill this hidden field

  const name = clean(b.name, 100);
  const email = clean(b.email, 150);
  const phone = clean(b.phone, 30);
  const company = clean(b.company, 120);
  const topic = clean(b.topic, 100);
  const message = String(b.message ?? "").trim().slice(0, 2000);
  const date = clean(b.date, 10);
  const time = clean(b.time, 5);

  const today = istToday();
  if (name.length < 2) return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  if (!TOPICS.includes(topic)) return Response.json({ error: "Please choose a topic." }, { status: 400 });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date <= today || date > addDays(today, MAX_DAYS_AHEAD))
    return Response.json({ error: "Please choose a date within the next 60 days." }, { status: 400 });
  if (!slotsFor(date).includes(time)) return Response.json({ error: "Please choose a time." }, { status: 400 });

  const when = `${date} at ${slotLabel(time)} IST`;
  const details = [
    `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "-"}`, `Company: ${company || "-"}`,
    `Topic: ${topic}`, `Preferred time: ${when}`, "", "What they want to improve:", message || "-",
  ].join("\n");

  const { RESEND_API_KEY, RESEND_FROM, BOOKING_TO } = process.env;
  if (!RESEND_API_KEY || !BOOKING_TO) {
    console.error("Email not configured: set RESEND_API_KEY and BOOKING_TO.");
    return Response.json({ error: "Booking is temporarily unavailable. Please email us directly." }, { status: 500 });
  }

  const bookingRecipients = BOOKING_TO.split(",").map((address) => address.trim()).filter(Boolean);
  if (!bookingRecipients.length) {
    console.error("Email not configured: BOOKING_TO has no valid recipients.");
    return Response.json({ error: "Booking is temporarily unavailable. Please email us directly." }, { status: 500 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const from = RESEND_FROM || "Stellar Solutions <onboarding@resend.dev>";

  try {
    const notification = await resend.emails.send({
      from,
      to: bookingRecipients,
      replyTo: email,
      subject: `New call request: ${name}, ${date} ${slotLabel(time)} IST`,
      text: details,
    });

    if (notification.error) {
      console.error("Resend notification error:", notification.error);
      return Response.json({ error: "We could not send your request. Please email us directly." }, { status: 502 });
    }
  } catch (e) {
    console.error("Booking email failed:", e);
    return Response.json({ error: "We could not send your request. Please email us directly." }, { status: 502 });
  }

  // Confirmation to the visitor. A failure here does not fail the booking.
  resend.emails.send({
    from,
    to: email,
    subject: "We received your call request",
    text: `Hi ${name},\n\nThanks for reaching out. We received your request for a free 30-minute call on ${when}. We will confirm the slot by email within one business day.\n\nYour details:\n${details}\n\nIf you need to change the time, just reply to this email.`,
  }).then((confirmation) => {
    if (confirmation.error) console.error("Resend confirmation error:", confirmation.error);
  }).catch((e) => console.error("Confirmation email failed:", e));

  return Response.json({ ok: true });
}
