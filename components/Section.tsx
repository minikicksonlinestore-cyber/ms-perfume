import Reveal from "./Reveal";

type Props = { id: string; eyebrow: string; title: React.ReactNode; lead?: string; alt?: boolean; children: React.ReactNode };

export default function Section({ id, eyebrow, title, lead, alt, children }: Props) {
  return (
    <section id={id} className={`relative py-14 md:py-24 ${alt ? "bg-[radial-gradient(ellipse_at_90%_20%,rgba(217,99,30,.13),transparent_55%)] bg-ink-2" : "bg-[radial-gradient(ellipse_at_8%_0%,rgba(217,99,30,.11),transparent_50%)]"}`}>
      {alt && <div aria-hidden className="bg-lattice pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />}
      <div className="relative mx-auto max-w-[1240px] px-5 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="title">{title}</h2>
          <div className="divider mx-auto" />
          {lead && <p className={`mx-auto max-w-[620px] text-cream/60`}>{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
