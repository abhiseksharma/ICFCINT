import { Mail, Phone, MapPin } from "lucide-react";

import Container from "@/components/ui/container";

// import PageHero from "@/components/sections/page-hero";

// <PageHero
//     eyebrow="Contact"
//     title="Contact Us"
// />


export default function ContactPage() {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
  <Container>

    {/* <p className="text-sm uppercase tracking-[0.5em] text-blue-200">
      CONTACT
    </p> */}

    <h1 className="mt-4 text-5xl font-black">
      Contact Us
    </h1>

    {/* <div className="mt-8 text-xl text-blue-100">
      Home / Contact
    </div> */}

  </Container>
</section>

      {/* Contact Details */}

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[30px] border shadow-sm">

            <div className="bg-[#003B71] px-8 py-5 text-white">
              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>
            </div>

            <table className="w-full border-collapse">

              <tbody>

                <tr className="border-b even:bg-slate-50">
                  <td className="w-1/3 border-r p-6 font-semibold">

                    <div className="flex items-center gap-3">
                      <Phone
                        className="text-[#00629B]"
                        size={20}
                      />

                      Phone
                    </div>

                  </td>

                  <td className="p-6">
                    +91 XXXXX XXXXX
                  </td>
                </tr>

                <tr className="border-b even:bg-slate-50">
                  <td className="border-r p-6 font-semibold">

                    <div className="flex items-center gap-3">
                      <Mail
                        className="text-[#00629B]"
                        size={20}
                      />

                      Email
                    </div>

                  </td>

                  <td className="p-6">
                    conference@email.com
                  </td>
                </tr>

                <tr className="even:bg-slate-50">
                  <td className="border-r p-6 font-semibold">

                    <div className="flex items-center gap-3">
                      <MapPin
                        className="text-[#00629B]"
                        size={20}
                      />

                      Address
                    </div>

                  </td>

                  <td className="p-6 leading-8">
                    School of Computer Science & Engineering
                    <br />
                    IILM University
                    <br />
                    Gurugram, Haryana
                    <br />
                    India
                  </td>
                </tr>

              </tbody>

            </table>

          </div>
        </Container>
      </section>

      {/* Google Map */}

      <section className="pb-24">
        <Container>

          <div className="overflow-hidden rounded-[30px] border shadow-sm">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5261643573963!2d77.1009798754935!3d28.43355117577405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7116a17591%3A0xa2f1868ef64f51ca!2sIILM%20University%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1783493142247!5m2!1sen!2sin" width="1200" height="450" loading="lazy"></iframe>

          </div>

        </Container>
      </section>
    </>
  );
}