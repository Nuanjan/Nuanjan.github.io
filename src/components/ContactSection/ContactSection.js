import React from "react";
import Image from "../sharedComponents/Image";
import SectionContainer from "../sharedComponents/SectionContainer";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <SectionContainer>
      <ContactInfo />
      <Image />
    </SectionContainer>
  );
};

export default ContactSection;
