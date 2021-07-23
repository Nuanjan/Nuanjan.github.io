import React from "react";
import AboutMeContent from "./AboutMeContent";
import Image from "../sharedComponents/Image";
import SectionContainer from "../sharedComponents/SectionContainer";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <AboutMeContent />
      <Image />
    </SectionContainer>
  );
};

export default AboutMeSection;
