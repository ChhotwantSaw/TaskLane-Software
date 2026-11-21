import BookingForm from "@/components/BookingForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { email, phone } from "@/lib/content";

export const metadata = {
  title: "Book a free call | [Agency Name]",
  description: "Pick a date and time for a free 30-minute call about AI, automation or optimization.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">Book a free 30-minute call</h1>
            <p className="text-lg leading-relaxed text-muted">Tell us where your team loses time or leads. We will tell you honestly whether software, AI or neither is the right fit, and what it would take.</p>
            <ul className="flex flex-col gap-2 text-muted">
              <li>Free, with no obligation</li>
              <li>Fixed price before we build anything</li>
              <li>You own the code and accounts</li>
            </ul>
            <p className="text-sm text-muted">Prefer email? Write to {email} or call {phone}.</p>
          </div>
          <BookingForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
