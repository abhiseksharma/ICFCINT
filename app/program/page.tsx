import {
  CalendarDays,
  Mic2,
  Presentation,
  Users,
  GraduationCap,
  Coffee,
} from "lucide-react";

import Container from "@/components/ui/container";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registration",
    description: "Replace with registration details.",
    icon: Users,
  },
  {
    time: "10:00 AM",
    title: "Inaugural Session",
    description: "Replace with inauguration details.",
    icon: GraduationCap,
  },
  {
    time: "11:00 AM",
    title: "Keynote Address",
    description: "Replace with keynote speaker information.",
    icon: Mic2,
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Replace with lunch information.",
    icon: Coffee,
  },
  {
    time: "02:00 PM",
    title: "Technical Sessions",
    description: "Replace with technical session details.",
    icon: Presentation,
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Banner */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
        <Container>
          {/* <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            PROGRAM
          </p> */}

          <h1 className="mt-4 text-5xl font-black">
            Conference Program
          </h1>

          {/* <p className="mt-4 text-blue-100">
            Home / Program
          </p> */}
        </Container>
      </section>

      {/* Intro */}

      <section className="py-20">
        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <CalendarDays
              className="mx-auto text-[#00629B]"
              size={56}
            />

            <h2 className="mt-6 text-4xl font-bold">
              Technical Program (To be announced)
            </h2>

            {/* <p className="mt-6 text-lg leading-8 text-slate-600">
              Replace this section with a brief introduction to the conference
              program and schedule.
            </p> */}

          </div>

        </Container>
      </section>

      {/* Schedule */}

      {/* <section className="bg-slate-50 py-24">

        <Container>

          <h2 className="text-center text-4xl font-bold">
            Tentative Schedule
          </h2>

          <div className="mt-16 space-y-8">

            {schedule.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="flex flex-col gap-6 rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:flex-row lg:items-center"
                >

                  <div className="rounded-2xl bg-blue-50 p-5 text-[#00629B]">

                    <Icon size={30} />

                  </div>

                  <div className="w-40 text-lg font-bold text-[#00629B]">
                    {item.time}
                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </Container>

      </section> */}

      {/* Keynote */}

      {/* <section className="py-24">

        <Container>

          <div className="rounded-3xl border p-12 shadow-sm">

            <Mic2
              className="mb-6 text-[#00629B]"
              size={44}
            />

            <h2 className="text-3xl font-bold">
              Keynote Sessions
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Replace this section with keynote information.
            </p>

          </div>

        </Container>

      </section> */}

      {/* Workshops */}

      {/* <section className="bg-slate-50 py-24">

        <Container>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border bg-white p-10 shadow-sm">

              <Presentation
                className="mb-6 text-[#00629B]"
                size={40}
              />

              <h2 className="text-3xl font-bold">
                Workshops
              </h2>

              <p className="mt-6 text-slate-600">
                Replace with workshop information.
              </p>

            </div>

            <div className="rounded-3xl border bg-white p-10 shadow-sm">

              <GraduationCap
                className="mb-6 text-[#00629B]"
                size={40}
              />

              <h2 className="text-3xl font-bold">
                Tutorials
              </h2>

              <p className="mt-6 text-slate-600">
                Replace with tutorial information.
              </p>

            </div>

          </div>

        </Container>

      </section> */}

      {/* Closing */}

      {/* <section className="py-24">

        <Container>

          <div className="rounded-[40px] bg-[#003B71] p-16 text-center text-white">

            <h2 className="text-4xl font-bold">
              Final Program
            </h2>

            <p className="mt-6 text-blue-100">
              The detailed conference schedule will be published here before the conference.
            </p>

          </div>

        </Container>

      </section> */}

    </>
  );
}