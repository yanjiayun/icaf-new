import React from "react";
import LandingHeader from "../../components/landingPage/LandingHeader";
import Mission from "../../components/landingPage/Mission";
import WhatWeDo from "../../components/landingPage/WhatWeDo";
import Activities from "../../components/landingPage/Activities";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <Mission />
      <WhatWeDo />
      <Activities />
    </>
  )
};

export default LandingPage;