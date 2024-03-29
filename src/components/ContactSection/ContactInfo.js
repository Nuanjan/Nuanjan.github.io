import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import ContentContainer from "../sharedComponents/ContentContainer";
import SocialMediaIcons from "../sharedComponents/SocialMediaIcons";
import ResumeButton from "../sharedComponents/ResumeButton";

import {
  ContactMeContainer,
  ContactHeader,
  ContactWrapper,
  IconSpan,
  TextParagraph,
  GetInTouchHeader,
} from "./contactInfoStyles";
const ContactInfo = () => {
  return (
    <ContentContainer>
      <ContactMeContainer>
        <ContactHeader id="contact">Contact Me</ContactHeader>
        <GetInTouchHeader>Let's get in touch</GetInTouchHeader>
        <h2>Name</h2>
        <ContactWrapper>
          <TextParagraph>Noon Schluntz</TextParagraph>
        </ContactWrapper>
        <h2>Number</h2>
        <ContactWrapper>
          <IconSpan>
            <GiVibratingSmartphone size="20px" />
          </IconSpan>
          <TextParagraph>(857) 265 5359</TextParagraph>
        </ContactWrapper>
        <h2>Email</h2>
        <ContactWrapper>
          <IconSpan>
            <HiOutlineMail size="20px" />
          </IconSpan>
          <TextParagraph>nuanjan.schluntz@gmail.com</TextParagraph>
        </ContactWrapper>
        <ResumeButton />
        <SocialMediaIcons />
      </ContactMeContainer>
    </ContentContainer>
  );
};

export default ContactInfo;
