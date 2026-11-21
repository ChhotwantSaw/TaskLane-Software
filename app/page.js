import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import { email, phone, serviceGroups, growth, engineering, stack, demos, commitments, steps, faqs, team } from "@/lib/content";

const wrap = "mx-auto w-full max-w-6xl px-6";
const btn = "inline-flex min-h-[44px] items-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark";
const btn2 = "inline-flex min-h-[44px] items-center rounded-lg border border-slate-400 px-6 py-3 font-semibold transition hover:bg-line";
const card = "lift flex h-full flex-col gap-2 rounded-xl border border-line bg-white p-6";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 md:py-24">
          <div className={`${wrap} flex flex-wrap items-center gap-12`}>
            <Reveal className="flex min-w-[300px] flex-1 basis-[480px] flex-col gap-6">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                Software, automation and AI built for operations-heavy businesses
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                We build the web apps, integrations and dashboards your team runs on, then add automation, AI and optimization where they save the most time. Start with a free mini-test on your own data.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className={btn}>Book a free 30-min call</a>
                <a href="#services" className={btn2}>See what we build</a>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted">
                <li>Free 30-minute call</li><li>Fixed price before we build</li><li>You own the code and accounts</li>
              </ul>
            </Reveal>
            <Reveal delay={150} className="flex-1 basis-[340px] rounded-2xl bg-night p-8">
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        <section className="overflow-hidden border-y border-line bg-white py-5" aria-label="Technologies we use">
          <div className="marquee">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="mx-6 whitespace-nowrap text-[15px] font-medium text-slate-600" aria-hidden={i >= stack.length}>{s}</span>
            ))}
          </div>
        </section>

        <section id="services" className="py-20">
          <div className={`${wrap} flex flex-col gap-14`}>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight">What we build</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">Solid software first, with automation, AI and optimization added where they pay off.</p>
            </Reveal>
            {serviceGroups.map((g) => (
              <div key={g.id} id={g.id} className="flex flex-col gap-6">
                <Reveal>
                  <h3 className="text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{g.text}</p>
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((s, i) => (
                    <Reveal key={s.title} delay={(i % 3) * 90}>
                      <div className={card}>
                        <h4 className="text-lg font-semibold">{s.title}</h4>
                        <p className="leading-relaxed text-muted">{s.text}</p>
                      </div>
                    </Reveal>))}
                </div>
              </div>))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">How most projects grow</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">You do not need AI on day one. Most clients start with the problem and add to it as the foundation settles.</p></Reveal>
            <ol className="grid gap-5 md:grid-cols-3">
              {growth.map((g, i) => (
                <Reveal key={g.title} delay={i * 120}>
                  <li className={card}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-[15px] font-bold text-night">{i + 1}</span>
                    <h3 className="mt-1 text-lg font-semibold">{g.title}</h3>
                    <p className="leading-relaxed text-muted">{g.text}</p>
                  </li>
                </Reveal>))}
            </ol>
          </div>
        </section>

        <section id="demos" className="py-16">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">See it working</h2>
              <p className="mt-3 max-w-xl text-lg text-muted">Sample projects we built to show our approach. Each is a demo, labeled as such.</p></Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {demos.map((d, i) => (
                <Reveal key={d.title} delay={(i % 3) * 90}>
                  <div className={card}>
                    {d.video ? <video src={d.video} controls className="h-32 w-full rounded-lg object-cover" />
                      : <div className="flex h-32 items-center justify-center rounded-lg bg-line text-sm text-muted">[Demo video]</div>}
                    <p className="mt-2 text-sm font-semibold text-brand">{d.tag}</p>
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="leading-relaxed text-muted">{d.text}</p>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </section>

        <section id="engineering" className="bg-white py-16">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">Built like production software</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">Whether it is an app or an AI assistant, it gets the same engineering care.</p></Reveal>
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {engineering.map((e, i) => (
                <Reveal key={e.title} delay={(i % 3) * 90}>
                  <div className="flex gap-3">
                    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 10l4 4 8-8" /></svg>
                    <div><h3 className="font-semibold">{e.title}</h3><p className="mt-1 leading-relaxed text-muted">{e.text}</p></div>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </section>

        <section id="commitments" className="bg-night py-20">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight text-white">Our commitments to you</h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">We are a new team, so we do not ask for blind trust. We reduce your risk at every step and let you check our work.</p></Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {commitments.map((c, i) => (
                <Reveal key={c.title} delay={(i % 3) * 90}>
                  <div className="lift flex h-full flex-col gap-2 rounded-xl border border-night-line bg-night-card p-6">
                    <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                    <p className="leading-relaxed text-slate-300">{c.text}</p>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-16">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">How working with us goes</h2>
              <p className="mt-3 text-lg text-muted">Five steps, with a fixed price agreed before any build starts.</p></Reveal>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 110}>
                  <li className="flex flex-col gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-[15px] font-bold text-night">{i + 1}</span>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="leading-relaxed text-muted">{s.text}</p>
                  </li>
                </Reveal>))}
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className={`${wrap} flex flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">The people you will work with</h2>
              <p className="mt-3 text-lg text-muted">A small team. You talk to the people who build your system.</p></Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {team.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className={card}>
                    <div className="h-[72px] w-[72px] rounded-full bg-line" />
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="leading-relaxed text-muted">{t.role}. {t.text}{" "}
                      {t.link && <a href={t.link} className="text-brand underline">LinkedIn</a>}</p>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className={`${wrap} flex max-w-3xl flex-col gap-8`}>
            <Reveal><h2 className="text-3xl font-bold tracking-tight">Questions business owners ask</h2></Reveal>
            <Reveal className="divide-y divide-line rounded-xl border border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-semibold">
                    {f.q}
                    <svg className="chev h-5 w-5 shrink-0 text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 8l5 5 5-5" /></svg>
                  </summary>
                  <p className="faq-a mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>))}
            </Reveal>
          </div>
        </section>

        <section id="contact" className="py-20">
          <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Tell us where your team loses time or leads</h2>
            <p className="text-lg leading-relaxed text-muted">Book a free 30-minute call. We will tell you honestly whether software, AI or neither is the right fit, and what it would take.</p>
            <a href="/contact" className={btn}>Pick a date and time</a>
            <p className="text-sm text-muted">{email} &middot; {phone}</p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
