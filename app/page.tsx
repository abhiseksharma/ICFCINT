import Hero from "@/components/sections/Hero";
import QuickLinks from "@/components/sections/quick-links";

import AboutUniversity from "@/components/sections/about-university";
import AboutDepartment from "@/components/sections/about-department";
import AboutConference from "@/components/sections/about-conference";

// import ConferenceHighlights from "@/components/sections/conference-highlights";

// import CTA from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />

      <QuickLinks />

      <AboutUniversity />

      <AboutDepartment />

      <AboutConference />

      {/* <ConferenceHighlights /> */}

      {/* <CTA /> */}
    </>
  );
}