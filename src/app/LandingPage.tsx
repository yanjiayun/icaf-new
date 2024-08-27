import React from "react";
import LandingHeader from "../../components/landingPage/LandingHeader";
import Mission from "../../components/landingPage/Mission";
import WhatWeDo from "../../components/landingPage/WhatWeDo";
import Activities from "../../components/landingPage/Activities";
import SpecialProjects from "../../components/landingPage/SpecialProjects";
import Bottom from "../../components/landingPage/Bottom";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <Mission />
      <WhatWeDo />
      <Activities />
      <SpecialProjects />
      <Bottom />
    </>
  )
};

export default LandingPage;