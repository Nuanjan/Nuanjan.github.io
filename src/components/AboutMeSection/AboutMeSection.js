import React from "react";
import AboutMeContent from "./AboutMeContent";
import ResumeAndImage from "../sharedComponents/ResumeAndImage";
import SectionContainer from "../sharedComponents/SectionContainer";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <AboutMeContent />
      <ResumeAndImage />
    </SectionContainer>
  );
};

export default AboutMeSection;
