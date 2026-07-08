import Link from "next/link";

import {
  FileText,
  Upload,
  CalendarDays,
  CreditCard,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const links = [
  {
    title: "Call for Papers",
    description: "View topics",
    href: "/call-for-papers",
    icon: FileText,
  },
  {
    title: "Paper Submission",
    description: "Submit paper",
    href: "/submission",
    icon: Upload,
  },
  {
    title: "Important Dates",
    description: "Conference schedule",
    href: "/important-dates",
    icon: CalendarDays,
  },
  {
    title: "Registration",
    description: "Registration fees",
    href: "/registration",
    icon: CreditCard,
  },
  {
    title: "Venue",
    description: "Conference venue",
    href: "/venue",
    icon: MapPin,
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-30 -mt-10 mb-24">
      <Container>

        <div className="grid overflow-hidden rounded-[32px] border bg-white shadow-2xl md:grid-cols-2 xl:grid-cols-5">

          {links.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                href={item.href}
                key={item.title}
                className="group border-r last:border-r-0 p-8 transition hover:bg-slate-50"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full border text-[#00629B] transition group-hover:bg-[#00629B] group-hover:text-white">

                  <Icon size={24} />

                </div>

                <h3 className="mt-6 font-bold">

                  {item.title}

                </h3>

                <div className="mt-3 flex items-center justify-between">

                  <span className="text-sm text-slate-500">

                    {item.description}

                  </span>

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </Link>

            );

          })}

        </div>

      </Container>
    </section>
  );
}