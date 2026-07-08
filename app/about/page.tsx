import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Globe,
  Lightbulb,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
        <Container>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            ABOUT
          </p>

          <h1 className="mt-4 text-5xl font-black">
            About the Conference
          </h1>

          <p className="mt-4 text-blue-100">
            Home / About
          </p>
        </Container>
      </section>

      {/* Conference Overview */}

      <section className="py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <h2 className="text-4xl font-bold">
                Conference Overview
              </h2>

              <p className="mt-8 leading-8 text-slate-600">
                Replace this section with the conference overview.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Add the aims, scope and vision of the conference here.
              </p>

            </div>

            <div>

              <div className="overflow-hidden rounded-3xl shadow-xl">

                <Image
                  src="/images/about-conference.jpg"
                  alt="Conference"
                  width={900}
                  height={700}
                  className="w-full"
                />

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* Theme */}

      <section className="bg-slate-50 py-24">

        <Container>

          <div className="rounded-3xl bg-[#00629B] p-16 text-white">

            <Lightbulb className="mb-8 h-12 w-12" />

            <h2 className="text-4xl font-bold">
              Conference Theme
            </h2>

            <p className="mt-6 max-w-4xl text-lg text-blue-100">
              Replace this with the conference theme.
            </p>

          </div>

        </Container>

      </section>

      {/* Objectives */}

      <section className="py-24">

        <Container>

          <h2 className="text-center text-4xl font-bold">
            Conference Objectives
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Objective One",
              "Objective Two",
              "Objective Three",
              "Objective Four",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl border bg-white p-8 shadow-sm"
              >

                <Globe className="mb-6 text-[#00629B]" />

                <h3 className="font-bold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-600">
                  Replace with objective.
                </p>

              </div>

            ))}

          </div>

        </Container>

      </section>

      {/* Organizing Institute */}

      <section className="bg-slate-50 py-24">

        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <Image
                src="/images/institute.jpg"
                alt="Institute"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <Building2 className="mb-6 text-[#00629B]" />

              <h2 className="text-4xl font-bold">
                Organizing Institute
              </h2>

              <p className="mt-8 leading-8 text-slate-600">
                Replace with institute information.
              </p>

              <Link href="#">
                <Button className="mt-8">
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>

          </div>

        </Container>

      </section>

      {/* Department */}

      <section className="py-24">

        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <GraduationCap className="mb-6 text-[#00629B]" />

              <h2 className="text-4xl font-bold">
                Organizing Department
              </h2>

              <p className="mt-8 leading-8 text-slate-600">
                Replace this section with department details.
              </p>

            </div>

            <div>

              <Image
                src="/images/department.jpg"
                alt="Department"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </Container>

      </section>

      {/* Technical Sponsor */}

      <section className="bg-slate-50 py-24">

        <Container>

          <h2 className="text-center text-4xl font-bold">
            Technical Sponsors
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            {[1,2,3,4].map((i)=>(
              <div
                key={i}
                className="flex h-40 items-center justify-center rounded-3xl border bg-white shadow-sm"
              >
                Logo
              </div>
            ))}

          </div>

        </Container>

      </section>

      {/* CTA */}

      <section className="py-24">

        <Container>

          <div className="rounded-[40px] bg-[#003B71] p-16 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready to Participate?
            </h2>

            <p className="mt-6 text-blue-100">
              Replace this with your call to action.
            </p>

            <div className="mt-10 flex justify-center gap-4">

              <Button>
                Submit Paper
              </Button>

              <Button variant="outline">
                Register
              </Button>

            </div>

          </div>

        </Container>

      </section>
    </>
  );
}