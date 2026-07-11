import Link from "next/link";

import {
  FileText,
  FileCode2,
  ExternalLink,
  Upload,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import PageHero from "@/components/sections/page-hero";

<PageHero
    eyebrow="Paper Submission"
    title="Paper Submission"
/>


const templates = [
  {
    title: "Microsoft Word Template",
    description:
      "Download the Conference Microsoft Word template for preparing your manuscript.",
    icon: FileText,
    link: "https://docs.google.com/document/d/1e5i9ng7X4BB8I63ps6G4lxpM7vaaPOIM/edit?usp=sharing&ouid=117917574359970762584&rtpof=true&sd=true",
  },
  {
    title: "LaTeX Template",
    description:
      "Download the Conference LaTeX template for preparing your manuscript.",
    icon: FileCode2,
    link: "https://drive.google.com/file/d/13iwZX6OR-PjrmpTurPFzhcvJ5pI8PsiB/view?usp=sharing",
  },
];

export default function SubmissionPage() {
  return (
    <>
    
    <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
  <Container>

    {/* <p className="text-sm uppercase tracking-[0.5em] text-blue-200">
      PAPER SUBMISSION
    </p> */}

    <h1 className="mt-6 text-5xl font-black">
      Paper Submission
    </h1>

    {/* <div className="mt-8 text-xl text-blue-100">
      Home / Paper Submission
    </div> */}

  </Container>
</section>

<section className="py-24">

    <Container>

        <div className="rounded-[32px] border bg-blue-50 p-12">

            <Upload
                size={42}
                className="text-[#00629B]"
            />

            <h2 className="mt-6 text-4xl font-bold">

                Paper Submission Portal

            </h2>

            <p className="mt-6 leading-8 text-slate-600">

                Authors may submit unpublished and original work. 
                All manuscripts must be submitted through the
                Microsoft Conference Management Toolkit (CMT).

                Authors should create an account (if required),
                upload their manuscript and monitor the review
                process through the portal.

            </p>

            <Link
                href="https://cmt3.research.microsoft.com/ICFCINT2027"
                target="_blank"
                className="inline-block"
            >

                <Button className="mt-8 bg-[#00629B]">

                    Submit via Microsoft CMT

                    <ExternalLink className="ml-2 h-4 w-4"/>

                </Button>

            </Link>

        </div>

    </Container>

</section>

<section className="bg-slate-50 py-24">

    <Container>

        <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
                AUTHOR GUIDELINES
            </p>

            <h2 className="mt-5 text-5xl font-black">
                Paper Templates & Formatting
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
                Authors are requested to prepare their manuscripts using the two column format. 
                Papers must strictly follow the prescribed formatting guidelines before submission 
                through the conference management system.
            </p>

        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2">

            {templates.map((template)=>{

                const Icon=template.icon;

                return(

                    <div
                        key={template.title}
                        className="rounded-[30px] border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                    >

                        <Icon
                            size={40}
                            className="text-[#00629B]"
                        />

                        <h3 className="mt-6 text-xl font-bold">

                            {template.title}

                        </h3>

                        <p className="mt-4 text-slate-600">

                            {template.description}

                        </p>

                        <Link href={template.link}>

                            <Button
                              className="mt-8 bg-[#00629B] hover:bg-[#004d7a]"
                          >

                              Download Template

                              <ExternalLink className="ml-2 h-4 w-4"/>

                          </Button>

                        </Link>

                    </div>

                )

            })}

        </div>

    </Container>

</section>


<section className="py-24">
  <Container>
    <div className="rounded-[32px] border bg-white p-12 shadow-sm">

      <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
        AUTHOR INSTRUCTIONS
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Paper Specifications
      </h2>

      <p className="mt-6 max-w-4xl leading-8 text-slate-600">
        Use the two Column format while preparing your
        manuscript. All submitted papers must comply with the following
        formatting requirements.
      </p>

      <div className="mt-12 space-y-8">

        {/* Paper Length */}

        <div className="border-b pb-6">

          <h3 className="text-xl font-semibold text-[#003B71]">
            📄 Paper Length
          </h3>

          <p className="mt-2 text-slate-600">
            Maximum <strong>6 pages</strong>.
          </p>

        </div>

        {/* Margins */}

        <div className="border-b pb-6">

          <h3 className="text-xl font-semibold text-[#003B71]">
            📐 Page Margins
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">

            <li>Minimum left margin: <strong>1.57 cm</strong></li>

            <li>Minimum right margin: <strong>1.57 cm</strong></li>

            <li>Minimum top margin (first page): <strong>0.95 cm</strong></li>

            <li>Minimum top margin (other pages): <strong>1.90 cm</strong></li>

            <li>Minimum bottom margin: <strong>2.54 cm</strong></li>

          </ul>

        </div>

        {/* File Format */}

        <div className="border-b pb-6">

          <h3 className="text-xl font-semibold text-[#003B71]">
            📁 File Format
          </h3>

          <p className="mt-2 text-slate-600">
            Manuscripts must be submitted in
            <strong> Adobe PDF (.pdf)</strong> format.
          </p>

        </div>

        {/* File Size */}

        <div className="border-b pb-6">

          <h3 className="text-xl font-semibold text-[#003B71]">
            💾 Maximum File Size
          </h3>

          <p className="mt-2 text-slate-600">
            The maximum allowed file size is
            <strong> 2.0 MB</strong>.
          </p>

        </div>

        {/* Page Numbers */}

        <div className="border-b pb-6">

          <h3 className="text-xl font-semibold text-[#003B71]">
            🔢 Page Numbers
          </h3>

          <p className="mt-2 text-slate-600">
            Do <strong>not</strong> include page numbers in your manuscript.
          </p>

        </div>

        {/* PDF Security */}

        <div>

          <h3 className="text-xl font-semibold text-[#003B71]">
            🔒 PDF Security
          </h3>

          <p className="mt-2 text-slate-600">
            Do <strong>not</strong> apply password protection or any other
            security settings to the PDF document.
          </p>

        </div>

      </div>

      {/* Important Note */}

      <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">

        <h3 className="text-lg font-bold text-red-700">
          Important Note
        </h3>

        <p className="mt-3 leading-7 text-red-700">
          Deviations from the above paper specifications may result in the
          rejection of your submission during the review or technical
          compliance check.
        </p>

      </div>

    </div>
  </Container>
</section>

<section className="py-20 bg-white">
  <Container>
    <div className="rounded-[30px] border border-blue-100 bg-blue-50 p-10 shadow-sm">

      <h2 className="text-3xl font-bold text-[#003B71]">
        CMT ACKNOWLEDGMENT
      </h2>

      <p className="mt-6 leading-8 text-slate-700">
        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
        This service was provided for free by Microsoft and they bore all expenses, including costs for Azure 
        cloud services as well as for software development and support.
      </p>

    </div>
  </Container>
</section>

    </>
  );
}