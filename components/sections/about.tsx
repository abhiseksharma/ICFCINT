import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <Container>

        <SectionTitle
          title="About the Conference"
          subtitle="Lorem ipsum dolor sit amet..."
        />

        <div className="mx-auto max-w-4xl text-center leading-8 text-slate-600">
          Replace this with your conference description.
        </div>

      </Container>
    </section>
  );
}