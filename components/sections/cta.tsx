import Link from "next/link";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-[#003B71] py-24">

      <Container>

        <div className="text-center text-white">

          <p className="uppercase tracking-[0.3em] text-blue-200">
            JOIN THE CONFERENCE
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Ready to Participate?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-blue-100">
            Replace this section with a short invitation for authors,
            researchers, industry professionals and students.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link href="/submission">
              <Button
                size="lg"
                className="bg-white text-[#003B71] hover:bg-slate-100"
              >
                Submit Paper
              </Button>
            </Link>

            <Link href="/registration">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[#003B71]"
              >
                Register Now
              </Button>
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}