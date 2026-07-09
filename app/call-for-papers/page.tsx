import Link from "next/link";
// import TrackCard from "@/components/sections/track-card";

import {
  Brain,
  Cpu,
  Cloud,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const iconMap = {
  brain: Brain,
  cpu: Cpu,
  cloud: Cloud,
  shield: ShieldCheck,
  sparkles: Sparkles,
};

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";


// type Track = {
//   id: number;
//   icon: "brain" | "cpu" | "cloud" | "shield" | "sparkles";
//   title: string;
//   chair: string;
//   description: string;
//   topics: string[];
// };


import TrackCard, {
  type TrackCardProps,
} from "@/components/sections/track-card";


const tracks: TrackCardProps[] = [
  {
    id: 1,
    icon: "brain",

    title:
      "Artificial Intelligence, Machine Learning & Data Science",

    chair:
      "Dr. Amar Shukla, IILM University Gurugram",

    // society:
    //   "IEEE Computer Society / Computational Intelligence Society",

    description:
      "This track focuses on theoretical advancements and practical applications of intelligent systems and data-driven technologies (not limited to).",

    topics: [
    "Machine Learning, Deep Learning, Reinforcement Learning",
    "Natural Language Processing and Conversational AI",
    "Computer Vision and Pattern Recognition", 
    "Big Data Analytics and Data Mining", 
    "Explainable AI (XAI) and Responsible AI", 
    "AI in Healthcare, Finance, Agriculture, and Smart Cities", 
    ],
  },

  {
    id: 2,

    icon: "cpu",

    title:
      "Internet of Things (IoT), Smart Systems & Embedded Technologies",

    chair:
      "Dr. Law Kumar Singh, IILM University Gurugram",

    // society:
    //   "IEEE Internet of Things Society",

    description:
      "This track explores innovations in connected systems and intelligent environments (not limited to).",

    topics: [
      "IoT Architectures, Protocols, and Applications" ,
      "Smart Cities, Smart Homes, and Smart Healthcare Systems ",
      "Industrial IoT (IIoT) and Automation ",
      "Edge Computing and Fog Computing ",
      "Wireless Sensor Networks and Embedded Systems ",
    ],
  },
  {
  id: 3,

  icon: "cloud",

  title:
    "Cloud Computing, Distributed Systems & Next-Generation Networks",

  chair:
    "Dr. Shubham Mahajan, Amity University Haryana",

  description:
    "This track addresses scalable computing infrastructures and future communication technologies.",

  topics: [
    "Cloud Computing, Virtualization, and Containerization" ,
    "Distributed Systems and Parallel Computing ",
    "Serverless Computing and Microservices" ,
    "5G/6G Networks and Future Communication Systems ",
    "Software Defined Networking (SDN) and Network Function Virtualization (NFV) ",
  ],
},
{
  id: 4,

  icon: "shield",

  title:
    "Cybersecurity, Blockchain & Digital Trust",

  chair:
    "Dr. Umang Garg, IILM University Haryana",

  description:
    "This track highlights secure computing, privacy and decentralized technologies.",

  topics: [
    "Network and Information Security",
    "Cryptography and Secure Communication",
    "Blockchain Technologies and Smart Contracts",
    "Cyber Threat Intelligence and Digital Forensics",
    "Privacy Preservation and Data Protection",
  ],
},
{
  id: 5,

  icon: "cpu",

  title:
    "Emerging Technologies, Intelligent Systems & Interdisciplinary Applications",

  chair:
    "Dr. Jorge, IPVC, Portugal",

  description:
    "This track focuses on next-generation innovations and interdisciplinary applications across intelligent systems and sustainable technologies.",

  topics: [
    "Computational Intelligence and Metaheuristic Optimization",
    "Robotics, Automation, and Autonomous Systems",
    "Human-Computer Interaction and AR/VR",
    "Quantum Computing and Neuromorphic Systems",
    "Smart Healthcare, Smart Agriculture, and Sustainable Systems",
    "AI for Social Good and Digital Governance",
  ],
},

];

export default function CallForPapersPage() {
  return (
    <>
      {/* Banner */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
        <Container>
          {/* <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            CALL FOR PAPERS
          </p> */}

          <h1 className="mt-4 text-5xl font-black">
            Call for Papers
          </h1>

          {/* <p className="mt-4 text-blue-100">
            Home / Call for Papers
          </p> */}
        </Container>
      </section>

      {/* Intro */}

<section className="py-24">

    <Container>

        <div className="mx-auto max-w-5xl text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">

                CALL FOR PAPERS

            </p>

            <h2 className="mt-5 text-5xl font-black">

                Submit Your Original Research

            </h2>

            <p className="mt-10 text-lg leading-9 text-slate-600">

                ICFCINT 2027 invites researchers, academicians,
                industry professionals and students to submit
                original, unpublished research papers.

                The conference provides an international forum
                for exchanging innovative ideas, recent advances,
                emerging technologies and practical experiences
                across Computer Science, Artificial Intelligence,
                Data Science, IoT, Cloud Computing,
                Cybersecurity and other interdisciplinary domains.

            </p>

        </div>

    </Container>

</section>

      {/* Tracks */}

      <section className="bg-slate-50 py-24">

        <Container>

          <h2 className="text-center text-4xl font-bold">
            Conference Tracks
          </h2>

          <div className="mt-20 space-y-8">


            {tracks.map((track) => (

              <TrackCard
                key={track.id}
                {...track}
              />

            ))}

          </div>

        </Container>

      </section>

      {/* Guidelines

      <section className="bg-slate-50 py-24">

        <Container>

          <h2 className="text-center text-4xl font-bold">
            Submission Guidelines
          </h2>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border bg-white p-10 shadow-sm">

            <div className="space-y-6">

              {[
                "Guideline Placeholder",
                "Guideline Placeholder",
                "Guideline Placeholder",
                "Guideline Placeholder",
                "Guideline Placeholder",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-green-600" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </Container>

      </section> */}

      {/* <section className="bg-slate-50 py-24">

    <Container>

        <div className="rounded-[32px] border bg-white p-12 shadow-sm">

            <BookOpen
                className="mb-8 text-[#00629B]"
                size={42}
            />

            <h2 className="text-4xl font-bold">

                Publication

            </h2>

            <p className="mt-8 leading-8 text-slate-600">

                Accepted and presented papers will be submitted
                for inclusion in reputed proceedings.

            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

                <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <span>Peer Reviewed Papers</span>

                </div>

                <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <span>Proceedings</span>

                </div>

                <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <span>Original Contributions Only</span>

                </div>

                <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <span>Plagiarism Policy Applicable</span>

                </div>

            </div>

        </div>

    </Container>

</section> */}

      {/* Publication

      <section className="py-24">

        <Container>

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl border p-10 shadow-sm">

              <BookOpen
                className="mb-6 text-[#00629B]"
                size={40}
              />

              <h2 className="text-3xl font-bold">
                Publication
              </h2>

              <p className="mt-6 text-slate-600">
                Replace with publication details.
              </p>

            </div>

            <div className="rounded-3xl border p-10 shadow-sm">

              <FileText
                className="mb-6 text-[#00629B]"
                size={40}
              />

              <h2 className="text-3xl font-bold">
                Paper Template
              </h2>

              <p className="mt-6 text-slate-600">
                Replace with template instructions.
              </p>

              <Button className="mt-8">
                Download Template
              </Button>

            </div>

          </div>

        </Container>

      </section> */}

      {/* Ethics

      <section className="bg-slate-50 py-24">

        <Container>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-10">

            <ShieldCheck
              className="mb-6 text-amber-700"
              size={42}
            />

            <h2 className="text-3xl font-bold">
              Ethics & Plagiarism Policy
            </h2>

            <p className="mt-6 text-slate-700">
              Replace with your plagiarism and publication ethics policy.
            </p>

          </div>

        </Container>

      </section> */}

      {/* CTA

      <section className="py-24">

        <Container>

          <div className="rounded-[40px] bg-[#003B71] p-16 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready to Submit?
            </h2>

            <p className="mt-6 text-blue-100">
              Replace this with your submission message.
            </p>

            <Link href="/submission">

              <Button className="mt-10 bg-white text-[#003B71] hover:bg-slate-100">
                Go to Submission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </Link>

          </div>

        </Container>

      </section> */}
    </>
  );
}