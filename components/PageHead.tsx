import Link from "next/link";
import Scramble from "@/components/Scramble";
import Reveal from "@/components/Reveal";

export default function PageHead({
  crumb,
  title,
  titleRed,
  sub,
  idx,
}: {
  crumb: string;
  title: string;
  titleRed?: string;
  sub: string;
  idx: string;
}) {
  return (
    <header className="pagehead wrap">
      <Reveal>
        <div className="crumb mono">
          <Link href="/">INDEX</Link>
          <span className="red">/</span>
          <span>{crumb}</span>
        </div>
      </Reveal>
      <h1>
        <Scramble text={title} />
        {titleRed && (
          <>
            <br />
            <span className="red"><Scramble text={titleRed} /></span>
          </>
        )}
      </h1>
      <Reveal delay={0.15}>
        <p className="sub">{sub}</p>
      </Reveal>
      <span className="bigidx doto" aria-hidden="true">{idx}</span>
    </header>
  );
}
