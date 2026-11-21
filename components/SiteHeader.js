import { brand } from "@/lib/content";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <a href="/" className="text-xl font-bold">{brand}</a>
        <nav className="flex flex-wrap items-center gap-6 text-[15px] text-slate-700">
          <a href="/#services">Services</a>
          <a href="/#demos">Demos</a>
          <a href="/#commitments">Commitments</a>
          <a href="/#process">Process</a>
          <a href="/#faq">FAQ</a>
          <a href="/contact" className="inline-flex min-h-[44px] items-center rounded-lg bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark">Book a free call</a>
        </nav>
      </div>
    </header>
  );
}
