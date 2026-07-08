import Container from "@/components/ui/container";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
};

export default function PageHero({
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <section className="bg-[#0A4B84] pt-40 pb-28 text-white">

      <Container>

        <p className="text-sm font-medium uppercase tracking-[0.5em] text-blue-200">

          {eyebrow}

        </p>

        <h1 className="mt-6 text-6xl font-black">

          {title}

        </h1>

        <div className="mt-8 flex items-center gap-2 text-xl text-blue-100">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <span>/</span>

          <span>{title}</span>

        </div>

      </Container>

    </section>
  );
}