import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, GraduationCap } from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function AboutUniversity() {
  return (
    <section className="bg-white py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="relative">

                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />

            <Image
                src="/images/university.jpg"
                alt="University"
                width={900}
                height={700}
                className="h-[500px] w-full rounded-[36px] object-cover shadow-2xl"
            />

          </div>

          {/* RIGHT */}

          <div>

            <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">

              ORGANIZING INSTITUTION

            </p>

            <h2 className="mt-5 text-5xl font-black">

              About University

            </h2>

            <p className="mt-8 leading-8 text-slate-600">

              Established in 1993 under the Ram Krishan & Sons Charitable Trust, IILM University Gurugram 
              offers state-of-the-art facilities and holistic education in Liberal Arts, Management, and 
              Law. Supported by global collaborations, it nurtures future leaders with innovation and 
              purpose.

            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">

              <div>

                <Award
                  className="mb-3 text-[#00629B]"
                  size={28}
                />

                <h4 className="font-semibold">
                  30+ Years of Legacy 
                </h4>

              </div>

              <div>

                <GraduationCap
                  className="mb-3 text-[#00629B]"
                  size={28}
                />

                <h4 className="font-semibold">
                  25+ Programmes
                </h4>

              </div>

              <div>

                <Globe
                  className="mb-3 text-[#00629B]"
                  size={28}
                />

                <h4 className="font-semibold">
                  16000+ Global Alumni Network  
                </h4>

              </div>

            </div>

            <Link href="https://iilm.edu/gurugram/">

              <Button className="mt-10 bg-[#00629B] hover:bg-[#004d7a]">

                University Website

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}