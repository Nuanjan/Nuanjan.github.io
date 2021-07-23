import React from "react";
import ResumeAndImage from "../sharedComponents/ResumeAndImage";
import SectionContainer from "../sharedComponents/SectionContainer";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <SectionContainer>
      <ContactInfo />
      <ResumeAndImage />
    </SectionContainer>
  );
};

export default ContactSection;
