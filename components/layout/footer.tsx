import Link from "next/link";

import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">

      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-4">

          {/* Logo */}

          <div>

            {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629B] text-lg font-bold">
              IEEE
            </div> */}

            <h3 className="text-xl font-bold">
              ICFCINT 2027
            </h3>

            {/* <p className="mt-4 text-slate-400">
              Modern conference website built with
              Next.js and Tailwind CSS.
            </p> */}

          </div>

          {/* Conference */}

          <div>

            <h4 className="mb-5 font-semibold">
              Conference
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/important-dates">
                  Important Dates
                </Link>
              </li>

              <li>
                <Link href="/call-for-papers">
                  Call for Papers
                </Link>
              </li>

              <li>
                <Link href="/program">
                  Program
                </Link>
              </li>

              <li>
                <Link href="/registration">
                  Registration
                </Link>
              </li>

            </ul>

          </div>

          {/* Conference Continue */}

          <div>

            {/* <h4 className="mb-5 font-semibold">
              Participants
            </h4> */}

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/committee">
                  Committee
                </Link>
              </li>

              <li>
                <Link href="/submission">
                  Submission
                </Link>
              </li>

              {/* <li>
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/faq">
                  FAQ
                </Link>
              </li> */}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 font-semibold">
              Contact
            </h4>

            <p className="text-slate-400">
              icfcint@iilm.edu
            </p>

            <p className="mt-3 text-slate-400">
              Dr. Manish Kumar
            </p>

            <p className="mt-3 text-slate-400">
              +91 97591 11170
            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">

          © 2027 Conference Template.
          All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}