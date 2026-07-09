import {
  CalendarClock,
  FileText,
  FileCheck2,
  CreditCard,
  Mic,
  CircleAlert,
} from "lucide-react";

import Container from "@/components/ui/container";
import PageHero from "@/components/sections/page-hero";

<PageHero
    eyebrow="Important Dates"
    title="Important Dates"
/>

const timeline = [
  {
    title: "Opening Submission Date",
    date: "21 Dec 2026",
    icon: CalendarClock,
    color: "bg-blue-100 text-blue-700",
    description: "Paper submission portal opens.",
  },
  {
    title: "Closing Submission Date",
    date: "20 Jan 2027",
    icon: FileText,
    color: "bg-red-100 text-red-700",
    description: "Last date for paper submission.",
  },
  {
    title: "Notification of Acceptance / Rejection",
    date: "26 Feb 2027",
    icon: FileCheck2,
    color: "bg-green-100 text-green-700",
    description: "Authors will receive review decisions.",
  },
  {
    title: "Final Paper Submission & Registration",
    date: "12 Mar 2027",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-700",
    description: "Camera-ready paper submission and author registration deadline.",
  },
  {
    title: "Conference Dates",
    date: "22 Apr 2027 – 23 Apr 2027",
    icon: Mic,
    color: "bg-cyan-100 text-cyan-700",
    description: "Conference sessions, keynote talks and technical presentations.",
  },
];

export default function ImportantDatesPage() {
  return (
    <>
      {/* Banner */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
        <Container>

          {/* <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            IMPORTANT DATES
          </p> */}

          <h1 className="mt-4 text-5xl font-black">
            Conference Timeline
          </h1>

          {/* <p className="mt-4 text-blue-100">
            Home / Important Dates
          </p> */}

        </Container>
      </section>

      {/* Notice */}

      <section className="py-16 bg-slate-50">

        <Container>

          <div className="flex gap-5 rounded-3xl border border-blue-200 bg-blue-50 p-8">

            <CircleAlert className="mt-1 text-blue-700" />

            <div>

              <h2 className="text-xl font-bold text-blue-800">
                Important Notice
              </h2>

              <p className="mt-3 text-slate-600">
                Replace this section with important instructions
                regarding deadlines, time zone, extensions, or
                submission policies.
              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* Timeline */}

      <section className="py-20">

        <Container>

          <div className="relative">

            <div className="absolute left-8 top-0 hidden h-full w-1 rounded bg-slate-200 lg:block" />

            <div className="space-y-8">

              {timeline.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative flex flex-col gap-6 rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:flex-row lg:items-center"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                    >
                      <Icon size={30} />
                    </div>

                      <div className="flex-1">

                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    <div className="rounded-2xl bg-slate-100 px-8 py-4 text-lg font-bold">
                      {item.date}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </Container>

      </section>

      {/* Notes */}

      <section className="bg-slate-50 py-20">

        <Container>

          <h2 className="text-3xl font-bold">
            Important Notes
          </h2>

          <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">

            <ul className="space-y-4 text-slate-600">

              <li>• All deadlines are based on the conference time zone.</li>

              <li>• Late submissions will not be accepted unless officially announced.</li>

              <li>• At least one author of each accepted paper must complete registration.</li>

              <li>• Only registered and presented papers will be considered for publication.</li>

            </ul>

          </div>

        </Container>

      </section>

      {/* CTA */}

      {/* <section className="py-24">

        <Container>

          <div className="rounded-[40px] bg-[#003B71] p-16 text-center text-white">

            <h2 className="text-4xl font-bold">
              Dont Miss Any Deadline
            </h2>

            <p className="mt-6 text-blue-100">
              Replace this text with a reminder for authors.
            </p>

          </div>

        </Container>

      </section> */}

    </>
  );
}