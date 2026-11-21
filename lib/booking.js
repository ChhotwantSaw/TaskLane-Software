// Booking rules shared by the form and the API. Times are India Standard Time (IST).
// Weekdays: 9:00 PM to midnight. Weekends: 8:00 AM to noon. 30-minute slots, IST.
export const WEEKDAY_SLOTS = ["21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
export const WEEKEND_SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
export const TOPICS = [
  "Knowledge assistant (chat with documents)",
  "Workflow or document automation",
  "WhatsApp, website or voice agent",
  "Optimization and planning",
  "Website or web app",
  "Not sure yet",
];
export const MAX_DAYS_AHEAD = 60;

export function slotLabel(s) {
  const [h, m] = s.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}
export function istToday() {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}
export function addDays(dateStr, n) {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
export function slotsFor(dateStr) {
  const day = new Date(dateStr + "T00:00:00Z").getUTCDay();
  return day === 0 || day === 6 ? WEEKEND_SLOTS : WEEKDAY_SLOTS;
}
