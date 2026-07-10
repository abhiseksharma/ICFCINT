import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "International Participation",
    icon: Globe,
  },
  {
    title: "Peer Reviewed Papers",
    icon: BookOpen,
  },
  {
    title: "Expert Speakers",
    icon: Users,
  },
  {
    title: "Best Paper Awards",
    icon: Award,
  },
];

export default function AboutConference() {
  return (
    <section className="bg-white py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />

            <Image
              src="/images/conference.jpeg"
              alt="Conference"
              width={900}
              height={700}
              className="relative h-[500px] w-full rounded-[36px] object-cover shadow-2xl"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
              ABOUT ICFCINT 2027
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              The International Conference on Future Computing, Intelligence Systems and Next-Gen Technologies
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              The International Conference on Future Computing, Intelligence Systems and Next-Gen Technologies 2027 
              (ICFCINT 2027) will be organized by School of Computer Science and 
              Engineering, IILM University, Gurugram during 22nd-23rd April 2027. The conference aims to 
              provide a premier international platform for academicians, researchers, scientists, industry 
              professionals, innovators and students to share their cutting edge research, emerging ideas 
              and practical experiences in the areas of innovative computing, science, engineering, 
              artificial intelligence and next generation technologies. The ICFCINT 2027 aims at the 
              development of transformative computational methodologies, intelligent systems, data-driven 
              technologies, and interdisciplinary innovations addressing real-world challenges and 
              contributing to sustainable technological advancement.
              The conference will also promote the translation of the theoretical discoveries obtained in 
              the fundamental scientific research to the practical solutions and the collaboration between 
              academia/research organizations and industry. It promotes high quality research in areas 
              such as Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Internet of 
              Things (IoT), Cloud and Edge Computing, Big Data Analytics, Robotics, Cyber-Physical Systems,
               Smart Computing, Quantum Technologies, Applied Mathematics, Engineering Innovations and 
               Digital Transformation. ICFCINT 2027 will focus on promoting interdisciplinary research, 
               strengthening global academic and industrial partnerships, and inspiring innovative 
               solutions that will shape the future of science, computing and next-generation technologies 
               through keynote lectures, technical sessions, panel discussions, and networking 
               opportunities.
            </p>

            {/* Feature Grid

            <div className="mt-10 grid grid-cols-2 gap-5">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border bg-slate-50 p-4"
                  >

                    <div className="rounded-full bg-blue-100 p-2">

                      <Icon
                        className="text-[#00629B]"
                        size={18}
                      />

                    </div>

                    <span className="text-sm font-medium">
                      {item.title}
                    </span>

                  </div>

                );

              })}

            </div> */}

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/call-for-papers">

                <Button className="bg-[#00629B] hover:bg-[#004d7a]">

                  Call for Papers

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

              </Link>

              <Link href="/important-dates">

                <Button variant="outline">

                  Important Dates

                </Button>

              </Link>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}