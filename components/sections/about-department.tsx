import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Database,
  Shield,
  Cpu,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
  },
  {
    title: "Data Science",
    icon: Database,
  },
  {
    title: "Cyber Security",
    icon: Shield,
  },
  {
    title: "Emerging Technologies",
    icon: Cpu,
  },
];

export default function AboutDepartment() {
  return (
    <section className="bg-slate-50 py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
              ORGANIZING DEPARTMENT
            </p>

            <h2 className="mt-5 text-5xl font-black">
              School of Computer Science & Engineering
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              School of Computer Science & Engineering is the leading schools at IILM University, 
              Gurugram that offers the B. Tech in Computer Science & Engineering, specializing in AI/ML, 
              Data Science, Data Engineering, Cloud Computing, Cyber Security, Robotics Intelligence, 
              Generative AI, Full Stack Development, and Immersive Technologies. Additionally, the school 
              offers M.Tech. and Ph.D. programmes. In recent years, the significance of computing 
              education has grown significantly, and the school stands as a leader, committed to shaping 
              future technology pioneers. The primary objective is to empower and guide students to 
              become industry leaders in cutting-edge computing technologies on both national and global 
              scales. The esteemed faculty, with extensive experience, is dedicated to provide students 
              with a unique blend of theoretical knowledge and practical skills necessary for success in 
              the ever-changing fields of Computer Science.
            </p>

            {/* <div className="mt-10 grid grid-cols-2 gap-5">

              {researchAreas.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border bg-white p-4"
                  >

                    <Icon
                      className="text-[#00629B]"
                      size={22}
                    />

                    <span>{item.title}</span>

                  </div>

                );

              })}

            </div> */}

            <Link href="https://iilm.edu/gurugram/school-of-cse/">
              <Button className="mt-10 bg-[#00629B]">
                Department Website

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

          {/* Right */}

          <Image
            src="/images/department.jpg"
            alt="Department"
            width={900}
            height={700}
            className="h-[500px] w-full rounded-[36px] object-cover shadow-2xl"
          />

        </div>
      </Container>
    </section>
  );
}