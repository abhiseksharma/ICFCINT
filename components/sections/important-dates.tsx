import {
  CalendarClock,
  FileCheck2,
  FileText,
  CreditCard,
  Mic,
} from "lucide-react";

import Container from "@/components/ui/container";
import PageHero from "@/components/sections/page-hero";

<PageHero
    eyebrow="Important Dates"
    title="Important Dates"
/>

const dates = [
  {
    title: "Paper Submission",
    date: "DD MMM YYYY",
    icon: FileText,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Acceptance Notification",
    date: "DD MMM YYYY",
    icon: FileCheck2,
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Camera Ready Submission",
    date: "DD MMM YYYY",
    icon: CalendarClock,
    color: "bg-orange-50 text-orange-700",
  },
  {
    title: "Author Registration",
    date: "DD MMM YYYY",
    icon: CreditCard,
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Conference Dates",
    date: "DD MMM YYYY",
    icon: Mic,
    color: "bg-cyan-50 text-cyan-700",
  },
];

export default function ImportantDates() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#00629B]">
            TIMELINE
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Important Dates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Replace these dates with the official conference schedule.
          </p>

        </div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-slate-200 lg:block" />

          <div className="space-y-8">

            {dates.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="relative flex flex-col gap-6 rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:flex-row lg:items-center"
                >

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Important milestone of the conference.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-slate-100 px-6 py-3 text-center font-semibold">

                    {item.date}

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </section>
  );
}