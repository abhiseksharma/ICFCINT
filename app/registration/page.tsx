import Link from "next/link";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import {
  CheckCircle2,
  ExternalLink,
  CreditCard,
  Landmark,
} from "lucide-react";

const indianFees = [
  {
    category: "Research Scholars / UG / PG Students",
    // nonIEEE: "₹ 7000",
    // ieee: "₹ 5500",
    amount: "₹ 7500",
  },
  {
    category: "Academics",
    // nonIEEE: "₹ 1500",
    // ieee: "₹ 1000",
    amount: "₹ 8500",
  },
  {
    category: "Delegates from Industry / Academia",
    // nonIEEE: "₹ 8500",
    // ieee: "₹ 7000",
    amount: "₹ 9000",
  },
];

const foreignFees = [

  {
    category: "Research Scholars / UG / PG Students",
    // nonIEEE: "$ 200",
    // ieee: "$ 150",
    amount: "$ 200",
  },
  {
    category: "Academics",
    // nonIEEE: "$ 250",
    // ieee: "$ 200",
    amount: "$ 250",
  },
  {
    category: "Delegates from Industry / Academia",
    // nonIEEE: "$ 250",
    // ieee: "$ 200",
    amount: "$ 300",
  },
  
  // {
  //   category: "Research Scholars / UG / PG Students",
  //   // nonIEEE: "$ 200",
  //   // ieee: "$ 150",
  // },
  // {
  //   category: "Delegates from Industry / Academia",
  //   nonIEEE: "$ 250",
  //   ieee: "$ 200",
  // },
  // {
  //   category: "Accompanying Person",
  //   nonIEEE: "$ 125",
  //   ieee: "$ 100",
  // },
];

const paymentDetails = [
  {
    field: "Account Name",
    value: "IILM University",
  },
  {
    field: "Account Number",
    value: "10058116447",
  },
  {
    field: "Bank and Branch",
    value: "IDFC FIRST Bank Gurgaon Golf Course Extension Road Branch, Unit No. 18-A, Ground Floor, Gurgaon - 122102",
  },
  {
    field: "IFSC Code",
    value: "IDFCB0020132",
  },
];


export default function RegistrationPage() {
  return (
    <>


  <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">
  <Container>
{/* 
    <p className="text-sm uppercase tracking-[0.5em] text-blue-200">
      REGISTRATION
    </p> */}

    <h1 className="mt-4 text-5xl font-black">
      Registration
    </h1>

    {/* <div className="mt-8 text-xl text-blue-100">
      Home / Registration
    </div> */}

  </Container>
</section>

<section className="py-20">
  <Container>

    <div className="text-center">

      <p className="font-semibold uppercase tracking-[0.35em] text-[#00629B]">
        REGISTRATION FEES
      </p>

      <h2 className="mt-5 text-5xl font-black">
        Conference Registration Fee
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Registration fees are applicable per accepted paper. At least one
        author of every accepted paper must register before the registration
        deadline.
      </p>

    </div>

    {/* Indian Delegates */}

    <div className="mt-16 overflow-hidden rounded-2xl border shadow-sm">

      <div className="bg-[#003B71] px-6 py-4 text-white">

        <h3 className="text-2xl font-bold">
          Indian Delegates
        </h3>

      </div>

      <table className="w-full border-collapse">

        <thead className="bg-slate-100">

          <tr>

            <th className="border p-4 text-left">
              Category
            </th>

            {/* <th className="border p-4 text-center">
              IEEE Member
            </th>

            <th className="border p-4 text-center">
              Non IEEE Member
            </th> */}

          
            <th className="border p-4 text-center">
              Amount
            </th>


          </tr>

        </thead>

        <tbody>

          {indianFees.map((item) => (

            <tr
              key={item.category}
              className="border-b even:bg-slate-50 hover:bg-blue-50 transition"
            >

              <td className="border p-4">
                {item.category}
              </td>

              {/* <td className="border p-4 text-center font-semibold">
                {item.ieee}
              </td>

              <td className="border p-4 text-center font-semibold">
                {item.nonIEEE}
              </td> */}

              <th className="border p-4 text-center">
                {item.amount}
              </th>


            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* Foreign Delegates */}

    <div className="mt-12 overflow-hidden rounded-2xl border shadow-sm">

      <div className="bg-[#003B71] px-6 py-4 text-white">

        <h3 className="text-2xl font-bold">
          Foreign Delegates
        </h3>

      </div>

      <table className="w-full border-collapse">

        <thead className="bg-slate-100">

          <tr>

            <th className="border p-4 text-left">
              Category
            </th>
{/* 
            <th className="border p-4 text-center">
              IEEE Member
            </th>

            <th className="border p-4 text-center">
              Non IEEE Member
            </th> */}

            <th className="border p-4 text-center">
              Amount
            </th>

          </tr>

        </thead>

        <tbody>

          {foreignFees.map((item) => (

            <tr
              key={item.category}
              className="border-b even:bg-slate-50 hover:bg-blue-50 transition"
            >

              <td className="border p-4">
                {item.category}
              </td>

              {/* <td className="border p-4 text-center font-semibold">
                {item.ieee}
              </td>

              <td className="border p-4 text-center font-semibold">
                {item.nonIEEE}
              </td> */}

              <th className="border p-4 text-center">
                {item.amount}
              </th>
              


            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </Container>
</section>


  <section className="pb-24">
  <Container>

    <div className="overflow-hidden rounded-2xl border shadow-sm">

      <div className="bg-[#003B71] px-6 py-4 text-white">

        <h2 className="text-2xl font-bold">
          Payment Details
        </h2>

      </div>

      <table className="w-full border-collapse">

        <tbody>

          {paymentDetails.map((item) => (

            <tr
              key={item.field}
              className="border-b even:bg-slate-50"
            >

              <td className="w-1/3 border-r p-5 font-semibold">
                {item.field}
              </td>

              <td className="p-5">
                {item.value}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </Container>
</section>

<section className="pb-24">
  <Container>

    <div className="rounded-2xl border bg-red-50 p-8">

      <h2 className="text-2xl font-bold text-red-700">
        Important Instructions
      </h2>

      <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-700">

        <li>
          At least one author of each accepted paper must register.
        </li>

        <li>
          Registration fee is non-refundable.
        </li>

        <li>
          Registration is mandatory for paper presentation.
        </li>

        {/* <li>
          Only registered and presented papers will be considered for IEEE Xplore submission.
        </li> */}

        <li>
          Please preserve the payment receipt for future reference.
        </li>

      </ul>

    </div>

  </Container>
</section>

{/* <section className="pb-24">
  <Container>

    <div className="text-center">

      <Button
        size="lg"
        className="bg-[#003B71]"
      >
        Register Now
      </Button>

    </div>

  </Container>
</section> */}


    </>
  );
}


