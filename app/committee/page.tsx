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
      name: "Dr. Valentina Emilia Balas",
      designation: "Professor",
      organization: "Aurel Vlaicu University of Arad / Academy of Romanian Scientists, ROMANIA",
      image: "/images/profile-placeholder.jpg",
    },
    {
      name: "Dr. Aydin Azizi",
      designation: "Senior Lecturer",
      organization: "Oxford Brookes University, United Kindom",
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
      designation: "Professor, School of Computer Science and Engineering",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
  ];

    const financeChairs = [
    {
      name: "Dr. Law Kumar",
      designation: "Professor, School of Computer Science and Engineering",
      organization: "IILM University Gurugram",
      image: "/images/profile-placeholder.jpg",
    },
  ];

    const websiteChairs = [
    {
      name: "Dr. Abhisek Sharma",
      designation: "Assistant Professor, School of Computer Science and Engineering",
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
    name: "Dr. Daniel Dasig Jr",
    designation: "Professor",
    organization: "De La Salle-College of Saint Benilde, Manila",
  },
  {
    name: "Dr. Arshi Naim",
    designation: "Professor",
    organization: "European Global Institute of Innovation and technology, Malta",
  },
  {
    name: "Dr. Laxmi Shaw",
    designation: "Adjunct Faculty",
    organization: "College of Natural & App Science, University: Texas A& M -Victoria, USA",
  },
  {
    name: "Dr. Vinayakumar Ravi",
    designation: "Research Professor",
    organization: "Center for Artificial intelligence, Prince Mohammad Bin Fahd University, Saudi Arabia ",
  },
  {
    name: "Dr. Alvaro Rocha",
    designation: "Professor",
    organization: "ISEG, University of Lisbon, Portugal",
  },
  {
    name: "Dr. Muhammad Attique Khan",
    designation: "Research Professor",
    organization: "University College, Computer Science, Korea University, South Korea",
  },
    {
    name: "Dr. Nguyen Ha Huy Cuong",
    designation: "Professor",
    organization: "The University of Danang, Vietnam",
  },

  {
    name: "Prof. Surendra N. Rahamatkar",
    designation: "Pro Vice Chancellor, Dean",
    organization: "Avantika University (MIT Pune Group)",
  },
  {
    name: "Dr. Ahmed A. Elngar",
    designation: "Professor",
    organization: "Beni-Suef University, Egypt",
  },
    {
    name: "Dr. Ivan Perl",
    designation: "Associate Professor",
    organization: "ITMO University, Saint Petersburg, Russia",
  },
    {
    name: "Dr. Vishal Sharma",
    designation: "Reader",
    organization: "Soonchunhyang University, South Korea",
  },
    {
    name: "Dr. Osama Mokhtar",
    designation: "Professor",
    organization: "Obour Institutes, Cairo, Egypt",
  },
      {
    name: "Dr. Wei Cai",
    designation: "Assistant Professor",
    organization: "The Chinese University of Hong Kong, Shenzhen, China",
  },
      {
    name: "Dr. Victor C.M. Leung",
    designation: "Professor",
    organization: "The University of British Columbia, Canada",
  },
      {
    name: "Dr. Prihandoko",
    designation: "Deputy Director",
    organization: "Gunadarma University, Indonesia",
  },
  {
    name: "Dr. Sanjay Pratap Singh Chauhan",
    designation: "Professor, Computer Science & Engineering",
    organization: "Greater Noida Institute of Technology",
  },
      {
    name: "Dr. Arvind Dhingra",
    designation: "Associate Professor",
    organization: "GNDEC, Ludhiana",
  },
      {
    name: "Dr. Virender Rihani",
    designation: "Professor",
    organization: "Shoolini University",
  },
      {
    name: "Dr. Pramod Kumar",
    designation: "Dean & Principal",
    organization: "SRHU, Dehradun",
  },
      {
    name: "Dr. Bright Keswani",
    designation: "Professor",
    organization: "Suresh Gyan Vihar University",
  },
      {
    name: "Dr. Vijay Luxmi",
    designation: "Professor",
    organization: "Guru Kashi University, Bhatinda",
  },
  {
    name: "Dr. R.R. Bhargava",
    designation: "Professor",
    organization: "IIT, Roorkee",
  },
  {
    name: "Dr. Ashish Oberoi",
    designation: "Professor & Associate Dean",
    organization: "Lovely Professional University",
  },
  {
    name: "Dr. Lalit Goyal",
    designation: "Professor",
    organization: "BVCOE, New Delhi",
  },
  {
    name: "Dr. Major Singh",
    designation: "Professor",
    organization: "SLIET Longowal",
  },
  {
    name: "Dr. Ashutosh Kumar Bhatt",
    designation: "Professor",
    organization: "Uttarakhand Open University, Haldwani",
  },
  {
    name: "Dr. Deepak Garg",
    designation: "Vice Chancellor",
    organization: "SR university, Telangana, India",
  },
  {
    name: "Dr. Amit Kumar Mishra",
    designation: "Director",
    organization: "NIC, New Delhi",
  },
  {
    name: "Mr Sandeep Singh",
    designation: "Assistant Professor",
    organization: "SGT University, Gurgaon",
  },
  {
    name: "Dr. Nitin Goyal",
    designation: "Associate Professor",
    organization: "Deptt. of CSE, Chitkara University, Rajpura",
  },
  {
    name: "Dr Ranjeeta Kaushik",
    designation: "Lecturer",
    organization: "CGC Landran",
  },
  {
    name: "Mr. Suraj Pal Singh",
    designation: "Assistant Professor",
    organization: "Chandigarh University",
  },
  {
    name: "Dr surender",
    designation: "Assistant Professor",
    organization: "Sangrur",
  },
  {
    name: "Mr. Karandeep Singh",
    designation: "Assistant Professor",
    organization: "Punjab University, Patiala",
  },
  {
    name: "Dr. Jaswinder Singh",
    designation: "Professor",
    organization: "Punjabi University, Patiala",
  },
  {
    name: "Dr. Gagan Deep Jindal",
    designation: "Professor",
    organization: "CGC Landran",
  },
  {
    name: "Dr. Ratan Rana",
    designation: "Associate Professor",
    organization: "Jain Deemed to be University, Bangalore",
  },
  {
    name: "Dr. Ashima Shahi",
    designation: "Associate Professor",
    organization: "Chandigarh University, Mohali",
  },
  {
    name: "Sapinder Kaur",
    designation: "Assistant Professor",
    organization: "Chandigarh University",
  },
  {
    name: "Dr. Rajesh Garg",
    designation: "Professor",
    organization: "NIT Hamirpur",
  },
  {
    name: "Mr. Charanjiv Singh Saroa",
    designation: "Assistant Professor",
    organization: "Punjab University, Patiala",
  },
  {
    name: "Dr. Savita Gupta",
    designation: "Professor",
    organization: "UIET, PU, Chandigarh",
  },
  {
    name: "Dr. Naveen Aggarwal",
    designation: "Associate Professor",
    organization: "UIET, PU, Chandigarh",
  },
  {
    name: "Dr. Lakhwinder Kaur",
    designation: "Professor",
    organization: "UCoE, PU, Patiala",
  },
  {
    name: "Dr. Jayati Tripathi",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Sumit Dalal",
    designation: "Assistant Professor",
    organization: "Bennett University",
  },
  {
    name: "Ishita Tandon",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Nitu Yadav",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Kumud Goyal",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Ankita Mishra",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
];


const organizingCommittee = [
  {
    name: "Dr. Amar Shukla",
    designation: "Associate Professor",
    organization: "IILM University Gurugram",
  },
  {
    name: "Dr. Sachin Kumar",
    designation: "Associate Professor",
    organization: "IILM University Gurugram",
  },
  {
    name: "Dr. Nishu",
    designation: "Associate Professor",
    organization: "IILM University Gurugram",
  },
  {
    name: "Abhishek Kumar Pandey",
    designation: "Assistant Professor",
    organization: "IILM University Gurugram",
  },
  {
    name: "Dr. Navneet Redhu",
    designation: "Assistant Professor",
    organization: "IILM University Gurugram",
  },
{
    name: "Dr.Tanu Gupta",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Neha Bansal",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Vikas Jayaswal",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Sambhavi Shukla",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
];

const reviewCommittee = [
  {
    name: "Dr. Sapna Arora",
    designation: "Associate Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr Megha Rana",
    designation: "Associate Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Puneet Bawa",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Rupendra PS Hada",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Mansi Verma",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Mr. Naved Ahmad",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Vishwa Prakash Jha",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Shagun Panghal",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
];

const registrationCommittee = [
  {
    name: "Dr. Rahul Thakur",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Preeti Mehta",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Sangeeta Rani",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Anshita Shukla",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Satyam Sharma",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
];

const sponsorshipCommittee = [
  {
    name: "Dr. Samridhhi Singhal",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Sonam Lata",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Abhishek Toofani",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
  },
  {
    name: "Dr. Prince",
    designation: "Assistant Professor",
    organization: "IILM University, Gurugram",
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
        title="Program Chair"
        members={programChairs}
      />

      <CommitteeTable
        title="Publication Chair"
        members={publicationChairs}
      />

      <CommitteeTable
        title="Finance Chair"
        members={financeChairs}
      />

      <CommitteeTable
        title="Website Chair"
        members={websiteChairs}
      />

      <CommitteeTable
        title="Organizing Committee"
        members={organizingCommittee}
      />

      <CommitteeTable
        title="Review Committee"
        members={reviewCommittee}
      />

      <CommitteeTable
        title="Registration Committee"
        members={registrationCommittee}
      />

      <CommitteeTable
        title="Sponsorship Committee"
        members={sponsorshipCommittee}
      />

      <CommitteeTable
        title="International and National Technical Program Committee"
        members={technicalCommittee}
      />



      {/* <CommitteeTable
        title="Advisory Committee"
        members={advisoryCommittee}
      /> */}
    </>
  );
}