import {
  CalendarDays,
  MapPin,
  FileText,
  GraduationCap,
  Award,
  Clock3,
  Users,
} from "lucide-react";

import Container from "@/components/ui/container";

const items = [
  {
    icon: CalendarDays,
    title: "Conference Dates",
    value: "Conference Dates",
  },
  {
    icon: Clock3,
    title: "Submission Deadline",
    value: "Submission Deadline",
  },
  {
    icon: Award,
    title: "Acceptance Notification",
    value: "Acceptance Date",
  },
  {
    icon: FileText,
    title: "Proceedings",
    value: "IEEE Xplore",
  },
  {
    icon: MapPin,
    title: "Venue",
    value: "Conference Venue",
  },
  {
    icon: GraduationCap,
    title: "Hosted By",
    value: "Host Institute",
  },
  {
    icon: Users,
    title: "Mode",
    value: "Hybrid / Offline",
  },
];

export default function ConferenceGlance() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#00629B]">
            QUICK INFORMATION
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Conference at a Glance
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Replace these placeholders with conference information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00629B] hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#00629B]">
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}