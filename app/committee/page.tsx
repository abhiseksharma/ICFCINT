import Image from "next/image";

import Container from "@/components/ui/container";

// import PageHero from "@/components/sections/page-hero";
// <PageHero
//     eyebrow="Committee"
//     title="Organizing Committee"
// />

  const chiefPatron = [
    {
      name: "Chief Patron Name",
      designation: "Designation",
      organization: "Organization",
      image: "/images/profile-placeholder.jpg",
    },
  ];

  const patrons =  [
    {
      name: "Patron Name",
      designation: "Designation",
      organization: "Organization",
      image: "/images/profile-placeholder.jpg",
    },
    {
      name: "Patron Name",
      designation: "Designation",
      organization: "Organization",
      image: "/images/profile-placeholder.jpg",
    },
  ];

  const honoraryChairs = [
    {
      name: "Honorary Chair",
      designation: "",
      organization: "Organization",
      image: "/images/profile-placeholder.jpg",
    },
  ];


  const generalChairs = [
    {
      name: "Dr. Aydin Azizi",
      designation: "Senior Lecturer",
      organization: "Oxford Brookes University, United Kindom",
      image: "/images/profile-placeholder.jpg",
    },
    {
      name: "Dr. Valentina Emilia Balas",
      designation: "Professor",
      organization: "Aurel Vlaicu University of Arad / Academy of Romanian Scientists, ROMANIA",
      image: "/images/profile-placeholder.jpg",
    },
  ];


  const programChairs = [
    {
      name: "Dr. Shamik Tiwari",
      designation: "Professor and Dean, School of Computer Science and Engineering",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
    // {
    //   name: "Program Chair",
    //   designation: "Designation",
    //   organization: "Organization",
    //   image: "/images/profile-placeholder.jpg",
    // },
    // {
    //   name: "Program Chair",
    //   designation: "Designation",
    //   organization: "Organization",
    //   image: "/images/profile-placeholder.jpg",
    // },
  ];


  const publicationChairs = [
    {
      name: "Dr. Manish Kumar",
      designation: "Professor",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
  ];

    const financeChairs = [
    {
      name: "Dr. Law Kumar",
      designation: "Professor",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
  ];

    const websiteChairs = [
    {
      name: "Dr. Abhisek Sharma",
      designation: "Assistant Professor",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
  ];

const technicalCommittee = [
  {
    name: "Dr. Rajkumar Buyya",
    designation: "Professor",
    organization: "The University of Melbourne, Australia",
  },
  {
    name: "Dr. Jemal Hussein Abawajy",
    designation: "Professor",
    organization: "Deakin University, Australia",
  },
    {
    name: "Dr. Nguyen Ha Huy Cuong",
    designation: "",
    organization: "The University of Danang, Vietnam",
  },
    {
    name: "Dr. Ahmed A. Elngar",
    designation: "",
    organization: "Beni-Suef University, Egypt",
  },
    {
    name: "Dr. Ivan Perl",
    designation: "",
    organization: "ITMO University, Saint Petersburg, Russia",
  },
    {
    name: "Dr. Vishal Sharma",
    designation: "",
    organization: "oonchunhyang University, South Korea",
  },
    {
    name: "Dr. Osama Mokhtar",
    designation: "",
    organization: "Obour Institutes, Cairo, Egypt",
  },
      {
    name: "Dr. Wei Cai",
    designation: "",
    organization: "The Chinese University of Hong Kong, Shenzhen, China",
  },
      {
    name: "Dr. Victor C.M. Leung",
    designation: "",
    organization: "The University of British Columbia, Canada",
  },
      {
    name: "Dr. Prihandoko",
    designation: "",
    organization: "Deputy Director, G. University, Indonesia",
  },
      {
    name: "Dr. Arvind Dhingra",
    designation: "",
    organization: "GNDEC, Ludhiana",
  },
      {
    name: "Dr. Virender Rihani",
    designation: "",
    organization: "PEC, Chandigarh",
  },
      {
    name: "Dr. Pramod Kumar",
    designation: "Dean & Principal",
    organization: "SRHU, Dehradun",
  },
      {
    name: "Dr. Bright Keswani",
    designation: "",
    organization: "Suresh Gyan Vihar University",
  },
      {
    name: "Dr. Vijay Luxmi",
    designation: "",
    organization: "Guru Kashi University, Bhatinda",
  },
        {
    name: "Dr. R.R. Bhargava",
    designation: "",
    organization: "IIT, Roorkee",
  },
        {
    name: "Mr. Amit Sangroya",
    designation: "",
    organization: "TCS Innovations Lab, Noida",
  },
        {
    name: "Dr. Ashish Oberoi",
    designation: "",
    organization: "Lovely Professional University",
  },
        {
    name: "Dr. Lalit Goyal",
    designation: "",
    organization: "BVCOE, New Delhi",
  },
        {
    name: "Dr. Ashutosh Kumar Bhatt",
    designation: "",
    organization: "Uttarakhand Open University, Haldwani",
  },
        {
    name: "Dr. Deepak Garg",
    designation: "Vice Chancellor",
    organization: "SR university, Telangana, India",
  },
        {
    name: "Dr. Savita Gupta",
    designation: "",
    organization: "UIET, PU, Chandigarh",
  },
        {
    name: "Dr. Naveen Aggarwal",
    designation: "",
    organization: "UIET, PU, Chandigarh",
  },
  {
    name: "Dr. Lakhwinder Kaur",
    designation: "",
    organization: "UCoE, PU, Patiala",
  },
  {
    name: "Dr. Umang Garg",
    designation: "Associate Professor",
    organization: "IILM University Gurugram",
  },
  // {
  //   name: "Member Name",
  //   designation: "Designation",
  //   organization: "XYZ University",
  // },
];


const organizingCommittee = [
  {
    name: "Member Name",
    designation: "Professor",
    organization: "ABC University",
  },
  {
    name: "Member Name",
    designation: "Associate Professor",
    organization: "XYZ University",
  },
];

const advisoryCommittee = [
  {
    name: "Member Name",
    designation: "Professor",
    organization: "ABC University",
  },
  {
    name: "Member Name",
    designation: "Associate Professor",
    organization: "XYZ University",
  },
];


function MemberCard({
  name,
  designation,
  organization,
  image,
}: {
  name: string;
  designation: string;
  organization: string;
  image: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        className="mx-auto rounded-full object-cover"
      />

      <h3 className="mt-6 text-center text-xl font-bold">
        {name}
      </h3>

      <p className="mt-2 text-center text-slate-600">
        {designation}
      </p>

      <p className="mt-1 text-center text-sm text-slate-500">
        {organization}
      </p>

    </div>
  );
}

// function CommitteeSection({
//   title,
//   members,
// }: {
//   title: string;
//   members: typeof leadership.generalChairs;
// }) {
//   return (
//     <section className="py-16">

//       <Container>

//         <h2 className="mb-10 text-3xl font-bold">
//           {title}
//         </h2>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//         {members.map((member, index) => (
//         <MemberCard
//             key={`${member.name}-${index}`}
//             {...member}
//         />
//         ))}

//         </div>

//       </Container>

//     </section>
//   );
// }

function CommitteeTable({
  title,
  members,
}: {
  title: string;
  members: {
    name: string;
    designation: string;
    organization: string;
  }[];
}) {
  return (
    <section className="py-12">
      <Container>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

          <div className="bg-[#003B71] px-6 py-4 text-white">

            <h2 className="text-2xl font-bold">
              {title}
            </h2>

          </div>

          <table className="w-full border-collapse">

            <thead className="bg-slate-100">

              <tr>

                <th className="border p-4 text-left">
                  Name
                </th>

                <th className="border p-4 text-left">
                  Designation
                </th>

                <th className="border p-4 text-left">
                  Affiliation
                </th>

              </tr>

            </thead>

            <tbody>

              {members.map((member, index) => (

                <tr
                  key={index}
                  className="border-b even:bg-slate-50 hover:bg-blue-50 transition"
                >

                  <td className="border p-4 font-medium">
                    {member.name}
                  </td>

                  <td className="border p-4">
                    {member.designation}
                  </td>

                  <td className="border p-4">
                    {member.organization}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Container>

    </section>
  );
}

export default function CommitteePage() {
  return (
    <>
      {/* Banner */}

      <section className="bg-gradient-to-r from-[#003B71] via-[#005B96] to-[#00629B] py-24 text-white">

        <Container>

          {/* <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            COMMITTEE
          </p> */}

          <h1 className="mt-4 text-5xl font-black">
            Program Committee
          </h1>

          {/* <p className="mt-4 text-blue-100">
            Home / Committee
          </p> */}

        </Container>

      </section>

      {/* <CommitteeSection
        title="Chief Patron"
        members={chiefPatron}
      /> */}

      {/* <CommitteeSection
        title="Patrons"
        members={patrons}
      /> */}

      {/* <CommitteeSection
        title="Honorary Chairs"
        members={honoraryChairs}
      /> */}

      <CommitteeTable
        title="General Chairs"
        members={generalChairs}
      />

      <CommitteeTable
        title="Program Chairs"
        members={programChairs}
      />

      <CommitteeTable
        title="Publication Chairs"
        members={publicationChairs}
      />

      <CommitteeTable
        title="Finance Chairs"
        members={financeChairs}
      />

      <CommitteeTable
        title="Website Chairs"
        members={websiteChairs}
      />

      <CommitteeTable
        title="Technical Program Committee"
        members={technicalCommittee}
      />

      <CommitteeTable
        title="Organizing Committee"
        members={organizingCommittee}
      />

      <CommitteeTable
        title="Advisory Committee"
        members={advisoryCommittee}
      />
    </>
  );
}