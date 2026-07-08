import {
  BookOpen,
  Globe,
  Award,
  Users,
  Mic,
  FileCheck2,
} from "lucide-react";

import Container from "@/components/ui/container";

const highlights = [
  {
    title: "IEEE Xplore Publication",
    icon: BookOpen,
  },
  {
    title: "International Conference",
    icon: Globe,
  },
  {
    title: "Best Paper Awards",
    icon: Award,
  },
  {
    title: "Networking Opportunities",
    icon: Users,
  },
  {
    title: "Keynote Speakers",
    icon: Mic,
  },
  {
    title: "Peer Reviewed Papers",
    icon: FileCheck2,
  },
];

export default function ConferenceHighlights() {
  return (
    <section className="bg-white py-32">

      <Container>

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
            CONFERENCE HIGHLIGHTS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Why Participate?
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">

                  <Icon
                    className="text-[#00629B]"
                    size={30}
                  />

                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  Replace this with a short description.
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}