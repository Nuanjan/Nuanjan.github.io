import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import SociaMediaIcon from "./SociaMediaIcon";

import {
  SocialMediaBtnContainer,
  SocialMediaWrapper,
  ContactMeContainer,
  ContactHeader,
  ContactIcon,
  IconSpan,
  TextParagraph,
  ContactMeFlexbox,
  ContactMeWrapper,
} from "./contactStyles";
const Contact = () => {
  return (
    <ContactMeFlexbox>
      <ContactMeContainer>
        <ContactMeWrapper>
          <ContactHeader>Contact Me</ContactHeader>
          <h2>Let's get in touch</h2>
          <h2>Name</h2>
          <TextParagraph>Nuanjan Schluntz (Noon)</TextParagraph>
          <h2>Number</h2>
          <ContactIcon>
            <IconSpan>
              <GiVibratingSmartphone size="20px" />
            </IconSpan>
            <TextParagraph>(857) 265 5359</TextParagraph>
          </ContactIcon>
          <h2>Email</h2>
          <ContactIcon>
            <IconSpan>
              <HiOutlineMail size="20px" />
            </IconSpan>
            <TextParagraph>nuanjan.schluntz@gmail.com</TextParagraph>
          </ContactIcon>
          <h2>Social Media</h2>
          <SociaMediaIcon />
        </ContactMeWrapper>
      </ContactMeContainer>
    </ContactMeFlexbox>
  );
};

export default Contact;
