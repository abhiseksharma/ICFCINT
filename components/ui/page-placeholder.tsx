import Container from "@/components/ui/container";

interface Props {
  title: string;
  description: string;
}

export default function PagePlaceholder({
  title,
  description,
}: Props) {
  return (
    <section className="min-h-[75vh] flex items-center">
      <Container>
        <div className="max-w-4xl">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#00629B]">
            Coming Soon
          </span>

          <h1 className="mt-6 text-5xl font-black">
            {title}
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            {description}
          </p>

        </div>
      </Container>
    </section>
  );
}