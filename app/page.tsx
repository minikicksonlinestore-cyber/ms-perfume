import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import Sparkles from "@/components/Sparkles";
import Bottle from "@/components/Bottle";
import Section from "@/components/Section";
import Icon, { IconBadge, type IconName } from "@/components/Icon";
import MapCard from "@/components/MapCard";
import { CATEGORIES, COMPANY, PERFUMES, WHY } from "@/lib/data";

const grid = "mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]";

const STATS: { k: string; v: string; icon: IconName }[] = [
  { k: "Oman", v: "Home of the brand", icon: "pin" },
  { k: "Oud & Amber", v: "Signature notes", icon: "bottle" },
  { k: "WhatsApp", v: "Ask us anything", icon: "chat" },
];

const iconBtn = "grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.04] transition hover:border-orange hover:text-orange-light";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <main>
        <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-ink pb-24 pt-[340px] lg:items-center lg:pt-28">
          <div className="absolute inset-x-0 top-0 h-[470px] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[66%]">
            <Image src="/hero.jpg" alt="MS PERFUME Eau de Parfum bottle on aged oud wood with amber leaves" fill priority sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover object-[62%_38%] lg:object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink lg:bg-gradient-to-r lg:from-ink lg:via-ink/50 lg:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-ink to-transparent lg:block" />
          </div>
          <Sparkles />
          <div className="relative mx-auto w-full max-w-[1240px] px-5">
            <div className="max-w-[600px] text-center lg:text-left">
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-ink/60 px-5 py-2.5 text-[.72rem] uppercase tracking-[.22em] text-cream/80 backdrop-blur">
                <i className="h-2 w-2 rounded-full bg-orange-hot" />Muscat — Sultanate of Oman
              </span>
              <h1 className="font-serif text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,.6)]">
                A Scent That <br />Leaves a <span className="gold">Mark.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-[460px] text-[1.02rem] text-cream/75 lg:mx-0">
                Rich oud, glowing amber, soft musk and rose, inspired by Oman&apos;s centuries-old tradition of perfumery. Made for those who prefer to be remembered.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <a href="#perfumes" className="btn btn-fill px-8">Explore Perfumes <span aria-hidden>↗</span></a>
                <a href="#about" className="inline-flex items-center gap-3 text-sm text-cream transition hover:text-orange-light">Discover the Story <span className="text-orange" aria-hidden>⟶</span></a>
              </div>
              <dl className="mx-auto mt-10 grid max-w-[520px] grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-ink/70 p-3 text-left backdrop-blur sm:p-4 lg:mx-0">
                {STATS.map((s) => (
                  <div key={s.k} className="px-2 first:pl-0 sm:px-3 sm:first:pl-1">
                    <Icon name={s.icon} className="mb-2 h-5 w-5 text-orange" />
                    <dt className="whitespace-nowrap text-[.8rem] font-normal leading-tight sm:text-[.95rem]">{s.k}</dt>
                    <dd className="mt-1 text-[.7rem] leading-snug text-cream/55">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-6 mx-auto flex max-w-[1240px] items-center justify-between px-5">
            <div className="flex gap-3">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconBtn}><Icon name="whatsapp" className="h-5 w-5" /></a>
              <a href={COMPANY.phoneHref} aria-label="Call" className={iconBtn}><Icon name="phone" className="h-5 w-5" /></a>
              <a href={`mailto:${COMPANY.email}`} aria-label="Email" className={iconBtn}><Icon name="mail" className="h-5 w-5" /></a>
            </div>
            <a href="#about" className="flex flex-col items-center gap-2 text-[.65rem] uppercase tracking-[.4em] text-cream/60">
              <span className="hidden sm:block">Scroll to discover</span>
              <span className="block h-10 w-px animate-scroll bg-gradient-to-b from-orange to-transparent" />
            </a>
            <span className="hidden w-[132px] sm:block" />
          </div>
        </section>

        <div className="overflow-hidden border-y border-white/10 bg-ink-2 py-5" aria-hidden>
          <div className="flex w-max animate-marquee items-center font-serif text-xl uppercase tracking-[.2em] text-orange md:text-2xl">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {["Oud", "Amber", "Musk", "Rose", "Attar", "Bakhoor", "Gifts"].map((w) => (
                  <span key={w} className="flex items-center">
                    <span className="px-8 md:px-12">{w}</span>
                    <span className="text-[.6rem] text-orange-light/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_30%,rgba(217,99,30,.16),transparent_55%)] py-16 md:py-28">
          <span aria-hidden className="pointer-events-none absolute -right-6 top-6 select-none font-serif text-[16rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(240,160,75,.07)] md:text-[26rem]">MS</span>
          <div className="relative mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)] items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-4"><span className="h-px w-10 bg-orange" />About Us</p>
              <h2 className="title text-[clamp(2.4rem,5.5vw,4.2rem)]">A House Rooted in <span className="gold">Omani Elegance</span></h2>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-cream/80">MS PERFUME is a fragrance brand owned and operated by {COMPANY.legalName}, based in Muscat, Sultanate of Oman.</p>
              <p className="mt-4 text-cream/65">Oman is the land of frankincense, and scent has long been part of welcome, celebration and everyday life across the Gulf. We take that heritage and give it a modern, refined voice: precious oriental notes such as oud, amber, musk and rose, composed to be worn with confidence.</p>
              <blockquote className="mt-8 border-l-2 border-orange pl-5 font-serif text-2xl italic leading-snug text-champagne sm:text-[1.7rem]">
                Every fragrance is chosen to celebrate presence, memory and quiet luxury.
              </blockquote>
            </Reveal>

            <Reveal>
              <ul className="grid gap-4">
                {([["dome", "Heritage", "Rooted in Gulf perfumery, shaped for modern taste."], ["gem", "Craft", "Oud, amber, musk and rose, chosen for depth and character."], ["drop", "Presence", "Made to be remembered, from the first spray to the last note."]] as [IconName, string, string][]).map(([ic, t, d]) => (
                  <li key={t} className="panel flex items-center gap-5 p-5 transition duration-500 hover:-translate-y-1 hover:border-orange/50 sm:p-7">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-orange/30 bg-orange/10 text-orange-light sm:h-16 sm:w-16"><Icon name={ic} className="h-6 w-6 sm:h-7 sm:w-7" /></span>
                    <span><b className="block font-serif text-2xl font-medium sm:text-[1.7rem]">{t}</b><span className="mt-1 block text-sm leading-snug text-cream/60">{d}</span></span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <Section id="perfumes" alt eyebrow="Our Perfumes" title={<>Featured <span className="gold">Fragrances</span></>} lead="A selection of well-loved designer fragrances. Message us for the full range, sizes and availability.">
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-7 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {PERFUMES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 120} className="card card-bare group !p-0">
                {p.image ? (
                  <div className="relative aspect-square w-full bg-[radial-gradient(closest-side_at_50%_58%,rgba(217,99,30,.30),transparent)]">
                    <Image src={p.image} alt={`${p.brand} ${p.name} ${p.type}`} width={520} height={520} className="absolute inset-x-[10%] bottom-[7%] top-[18%] h-[75%] w-[80%] object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,.65)] transition duration-700 group-hover:-translate-y-1.5 group-hover:scale-105" />
                    <div className="absolute inset-x-[22%] bottom-[5%] h-3 rounded-[50%] bg-black/60 blur-md" />
                    <span className="absolute left-2.5 top-2.5 rounded-full border border-white/10 bg-ink/75 px-2.5 py-1 text-[.52rem] uppercase tracking-[.16em] text-orange-light backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-[.62rem] sm:tracking-[.2em]">{p.brand}</span>
                  </div>
                ) : (
                  <div className="relative grid aspect-square w-full place-items-center rounded-2xl bg-[radial-gradient(closest-side,rgba(217,99,30,.28),transparent)]">
                    <Bottle tone={p.tone} label={p.label} className="h-[62%] w-auto drop-shadow-[0_10px_14px_rgba(0,0,0,.5)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
                    <span className="absolute left-2.5 top-2.5 rounded-full border border-white/10 bg-ink/75 px-2.5 py-1 text-[.52rem] uppercase tracking-[.16em] text-orange-light sm:left-4 sm:top-4 sm:px-3 sm:text-[.62rem] sm:tracking-[.2em]">{p.brand}</span>
                  </div>
                )}
                <div className="px-3 pb-4 pt-2 sm:px-5 sm:pb-6 sm:pt-3">
                  <h3 className="font-serif text-lg leading-tight sm:text-2xl">{p.name}</h3>
                  <p className="mt-1 text-[.68rem] leading-snug tracking-wide text-orange-light/90 sm:mt-1.5 sm:text-[.8rem] sm:tracking-wider">{p.type}</p>
                  <p className="mt-2 hidden text-[.82rem] leading-relaxed text-cream/60 sm:block">Ask us about sizes and availability.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="categories" eyebrow="Categories" title={<>Find Your <span className="gold">Scent Family</span></>} lead="Every fragrance belongs to a family. Start with the mood you love, and we will help you from there.">
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-7 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 100} className="card !px-3 !py-7 sm:!px-8 sm:!py-14">
                <IconBadge name={c.icon as IconName} className="!mb-3 sm:!mb-5 sm:!h-20 sm:!w-20" big />
                <h3 className="font-serif text-lg leading-tight sm:text-[1.9rem]">{c.name}</h3>
                <p className="mt-1.5 text-[.72rem] leading-snug text-cream/60 sm:mt-2.5 sm:text-[.9rem] sm:leading-relaxed sm:text-cream/65">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="why" alt eyebrow="Why Choose Us" title={<>The <span className="gold">MS</span> Difference</>} lead="A small house with a clear idea: fewer, better fragrances, and a real person to talk to.">
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {WHY.map((w, i) => (
              <Reveal key={w.name} delay={i * 100} className="card !p-4 sm:!p-6">
                <IconBadge name={w.icon as IconName} />
                <h3 className="font-serif text-lg leading-tight sm:text-2xl">{w.name}</h3>
                <p className="mt-1 text-[.68rem] leading-snug tracking-wide text-cream/55 sm:mt-1.5 sm:text-[.78rem] sm:tracking-wider">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <section id="store" className="py-14 md:py-24">
          <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)] items-center gap-10 px-5 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <Reveal>
              <figure className="relative">
                <div className="overflow-hidden rounded-[1.6rem] border border-orange/25 shadow-[0_30px_80px_rgba(0,0,0,.55)] sm:rounded-[2rem]">
                  <Image src="/store.jpg" alt="MS PERFUME storefront with lit shelves of perfumes, oud and gifts" width={1400} height={1050} className="h-auto w-full" />
                </div>
                <figcaption className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-full border border-orange/40 bg-ink/90 py-2 pl-2 pr-5 backdrop-blur sm:left-8">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-orange/15 text-orange-light"><Icon name="pin" className="h-5 w-5" /></span>
                  <span className="text-[.78rem] leading-tight">MS PERFUME<br /><span className="text-cream/60">{COMPANY.addressShort}</span></span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="pt-4 text-center lg:pt-0 lg:text-left">
              <p className="eyebrow">Visit Our Store</p>
              <h2 className="title">Step Inside <span className="gold whitespace-nowrap">MS PERFUME</span></h2>
              <div className="divider mx-auto lg:mx-0" />
              <p className="text-cream/70">Our boutique brings the collection together under warm light: shelves of perfumes, oud, bakhoor and gifts, with friendly help to find your signature scent.</p>
              <p dir="rtl" lang="ar" className="mt-3 font-serif text-2xl text-champagne">إم إس للعطور</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-left">
                {([["bottle", "Perfume"], ["wood", "Oud"], ["bakhoor", "Bakhoor"], ["gift", "Gifts"]] as [IconName, string][]).map(([ic, t]) => (
                  <li key={t} className="panel flex items-center gap-3 px-4 py-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange-light"><Icon name={ic} className="h-5 w-5" /></span>
                    <span className="font-serif text-xl">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-cream/60">{COMPANY.address}<br />{COMPANY.addressLine}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="btn btn-fill">Get Directions <span aria-hidden>↗</span></a>
                <a href={COMPANY.whatsappMsg} target="_blank" rel="noopener noreferrer" className="btn">WhatsApp Us</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="registration" className="relative bg-ink-2 py-14 md:py-24">
          <div aria-hidden className="bg-lattice pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
          <div className="relative mx-auto max-w-[1240px] px-5 text-center">
            <Reveal>
              <p className="eyebrow">Legal Details</p>
              <h2 className="title">Company <span className="gold">Registration</span></h2>
              <div className="divider mx-auto" />
              <p className="mx-auto max-w-[620px] text-cream/60">MS PERFUME is owned and operated by {COMPANY.legalName}, a registered company in the Sultanate of Oman.</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {[
                { l: "Legal Name", v: COMPANY.legalName, wide: true },
                { l: "Brand", v: COMPANY.brand },
                { l: "Country", v: COMPANY.country },
                ...COMPANY.registration.map((r) => ({ l: r.label, v: r.value, wide: r.label === "Head Quarter" })),
              ].map((r) => (
                <Reveal key={r.l} className={`panel p-4 sm:p-5 ${"wide" in r && r.wide ? "col-span-2" : ""}`}>
                  <b className="block text-[.62rem] font-normal uppercase tracking-[.2em] text-orange sm:text-[.7rem] sm:tracking-[.25em]">{r.l}</b>
                  <span className="mt-1.5 block font-serif text-lg leading-snug [overflow-wrap:anywhere] sm:text-2xl">{r.v}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Section id="contact" eyebrow="Contact Us" title={<>Let&apos;s <span className="gold">Talk Fragrance</span></>} lead="Questions about our fragrances, availability or gifting? Call, message us on WhatsApp or send an email. We are happy to help you choose.">
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10 text-left md:grid-cols-[1fr_1.2fr]">
            <Reveal className="grid content-start gap-4">
              {[
                { l: "Phone", v: COMPANY.phone, h: COMPANY.phoneHref, i: "phone" as IconName },
                { l: "Email", v: COMPANY.email, h: `mailto:${COMPANY.email}`, i: "mail" as IconName },
              ].map((i) => (
                <a key={i.l} href={i.h} className="panel flex items-center gap-4 p-5 transition hover:border-orange/60">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-orange/30 bg-orange/10 text-orange-light"><Icon name={i.i} className="h-5 w-5" /></span>
                  <span className="min-w-0 text-[.88rem] [overflow-wrap:anywhere] sm:text-base"><b className="block text-[.7rem] font-normal uppercase tracking-[.25em] text-orange">{i.l}</b>{i.v}</span>
                </a>
              ))}
              <a href={COMPANY.whatsappMsg} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[#25d366]/70 bg-[#25d366]/10 p-5 transition hover:bg-[#25d366]/20">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25d366]/20 text-[#4be08a]"><Icon name="whatsapp" className="h-6 w-6" /></span>
                <span><b className="block text-[.7rem] font-normal uppercase tracking-[.25em] text-[#4be08a]">WhatsApp</b>Chat with us now</span>
              </a>
              <div className="panel flex items-start gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-orange/30 bg-orange/10 text-orange-light"><Icon name="building" className="h-5 w-5" /></span>
                <span className="min-w-0"><b className="block text-[.7rem] font-normal uppercase tracking-[.25em] text-orange">Head Quarter</b>
                {COMPANY.legalName}<br />{COMPANY.address}<br />{COMPANY.addressLine}</span>
              </div>
            </Reveal>
            <Reveal><MapCard /></Reveal>
          </div>
        </Section>
      <section className="relative overflow-hidden py-20 md:py-28">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,99,30,.28),transparent_65%)]" />
          <div aria-hidden className="bg-lattice pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <Reveal className="relative mx-auto max-w-[760px] px-5 text-center">
            <p className="eyebrow">MS PERFUME</p>
            <h2 className="title text-[clamp(2.4rem,6vw,4.4rem)]">Find Your <span className="gold">Signature Scent</span></h2>
            <div className="divider mx-auto" />
            <p className="mx-auto max-w-[520px] text-cream/70">Tell us what you love and we will guide you. Call or message us on WhatsApp.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={COMPANY.whatsappMsg} target="_blank" rel="noopener noreferrer" className="btn btn-fill px-8"><Icon name="whatsapp" className="h-5 w-5" />Chat on WhatsApp</a>
              <a href={COMPANY.phoneHref} className="btn px-8"><Icon name="phone" className="h-5 w-5" />{COMPANY.phone}</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-orange/25 bg-ink-2 px-5 pb-28 pt-12 sm:pb-24 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,99,30,.22),transparent_60%)]" />
        <div aria-hidden className="bg-lattice pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center justify-center gap-3 font-serif text-2xl tracking-wide text-cream sm:justify-start">
                <Image src="/logo-sm.png" alt="" width={79} height={64} className="h-auto w-[64px] drop-shadow-[0_6px_18px_rgba(217,99,30,.45)] sm:w-[56px]" /><span>MS PERFUME<span className="text-orange">.</span></span>
              </div>
              <p className="mt-3 font-serif text-xl italic text-champagne/90">The art of Arabian scent.</p>
              <div className="divider mx-auto mt-5 sm:mx-0" />
              <p className="mx-auto mt-4 max-w-[340px] text-[.85rem] leading-relaxed text-cream/60 sm:mx-0 sm:max-w-none">Oud, amber, musk and rose, from {COMPANY.legalName}, Muscat, Oman.</p>
            </div>

            <div className="sm:hidden">
              <ul className="grid grid-cols-2 gap-3 text-left">
                {([
                  ["phone", "Call", COMPANY.phone, COMPANY.phoneHref],
                  ["whatsapp", "WhatsApp", "Chat with us", COMPANY.whatsappMsg],
                  ["mail", "Email", "Write to us", `mailto:${COMPANY.email}`],
                  ["pin", "Directions", "Ruwi / Muttrah", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`],
                ] as [IconName, string, string, string][]).map(([ic, l, v, h]) => (
                  <li key={l}>
                    <a href={h} {...(h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="block rounded-2xl border border-orange/25 bg-[linear-gradient(160deg,rgba(240,160,75,.14),rgba(0,0,0,.25))] p-4 shadow-[0_14px_30px_-12px_rgba(0,0,0,.8)] transition active:scale-[.98]">
                      <span className="mb-3 grid h-10 w-10 place-items-center rounded-full border border-orange/30 bg-orange/10 text-orange-light"><Icon name={ic} className="h-5 w-5" /></span>
                      <b className="block font-serif text-lg font-medium leading-tight">{l}</b>
                      <span className="mt-0.5 block text-[.72rem] leading-snug text-cream/55 [overflow-wrap:anywhere]">{v}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mx-auto mt-4 max-w-[300px] text-[.78rem] leading-relaxed text-cream/55">{COMPANY.address}<br />{COMPANY.addressLine}</p>
              <p className="mt-2 text-[.74rem] text-cream/45 [overflow-wrap:anywhere]">{COMPANY.email}</p>
            </div>

            <div className="hidden sm:block">
              <p className="eyebrow">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-cream/70">
                <li className="flex items-center gap-3"><Icon name="phone" className="h-4 w-4 shrink-0 text-orange" /><a href={COMPANY.phoneHref} className="transition hover:text-orange-light">{COMPANY.phone}</a></li>
                <li className="flex items-center gap-3"><Icon name="mail" className="h-4 w-4 shrink-0 text-orange" /><a href={`mailto:${COMPANY.email}`} className="[overflow-wrap:anywhere] transition hover:text-orange-light">{COMPANY.email}</a></li>
                <li className="flex items-start gap-3"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-orange" /><span>{COMPANY.address}<br />{COMPANY.addressLine}</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-[.74rem] leading-relaxed text-cream/45">
            <div className="flex items-center gap-3 text-orange/60" aria-hidden><span className="h-px w-10 bg-orange/40" /><span className="text-[.6rem]">✦</span><span className="h-px w-10 bg-orange/40" /></div>
            <p>© {new Date().getFullYear()} {COMPANY.legalName}, Oman. All rights reserved.<br />CR {COMPANY.registration[0].value} · Informational website, online sales are not offered.</p>
          </div>
        </div>
      </footer>

      <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-[18px] right-[18px] z-[45] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] shadow-[0_8px_24px_rgba(0,0,0,.5)] transition hover:scale-110"><Icon name="whatsapp" className="h-[30px] w-[30px] text-white" />
      </a>
    </>
  );
}
