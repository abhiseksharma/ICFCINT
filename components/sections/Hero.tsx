import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[650px] overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero-bg.jpg"
        alt="Conference Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#00294f]/90 via-[#003B71]/70 to-[#003B71]/30" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#003B71]/90 via-[#003B71]/60 to-transparent" />

      <Container>

        <div className="relative z-10 flex h-[88vh] max-w-3xl flex-col justify-center pt-24 text-white">
          <div className="mb-10 inline-flex items-center rounded-full bg-white/10 px-6 py-3 backdrop-blur-md">

              <Image
                  src="/images/institute-logo.png"
                  alt="Institute"
                  width={42}
                  height={42}
              />

              <div className="mx-4 h-8 w-px bg-white/20" />

              <span className="text-sm tracking-wide">

                  Hosted by IILM University Gurugram

              </span>

          </div>

            {/* Small Heading */}

            <p className="uppercase tracking-[0.35em] text-blue-200 font-semibold">

                INTERNATIONAL CONFERENCE ON

            </p>

            {/* Main Title */}

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight lg:text-4xl md:text-5x1 xl:text-6xl">
                
                Future Computing, 

                <br />

                Intelligence System

                <br />

                & Next-Gen Technologies

            </h1>

            {/* Subtitle */}

            {/* <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">

                Conference Theme / Subtitle

            </p> */}

            {/* Information */}

            <div className="mt-10 flex flex-wrap gap-8">

                <div className="flex items-center gap-3">

                    <CalendarDays size={22} />

                    <span>22-23 April, 2027</span>

                </div>

                <div className="flex items-center gap-3">

                    <MapPin size={22} />

                    <span>IILM University Gurugram, Haryana</span>

                </div>
{/* 
                <div className="flex items-center gap-3">

                    📚

                    <span>IEEE Xplore</span>

                </div> */}

            </div>

            {/* Buttons

            <div className="mt-12 flex flex-wrap gap-5">

                <Link href="/submission">

                    <Button
                        size="lg"
                        className="bg-[#0077CC] px-8 hover:bg-[#005fa3]"
                    >

                        Submit Paper

                    </Button>

                </Link>

                <Link href="/registration">

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-[#003B71]"
                    >

                        Register

                    </Button>

                </Link>

            </div> */}
        </div>

      </Container>

    {/* <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">

    <div className="flex h-12 w-7 justify-center rounded-full border border-white">

        <div className="mt-2 h-3 w-1 rounded-full bg-white" />

    </div>

  </div> */}

    </section>
  );
}