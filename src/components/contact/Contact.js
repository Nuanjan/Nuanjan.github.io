import React from "react";
import Content from "./../content/Content";
import { GiVibratingSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {
  SocialMediaBtnContainer,
  SocialMediaWrapper,
  ContactMeContainer,
  ContactHeader,
  ContactIcon,
  IconSpan,
  TextParagraph,
} from "./contactStyles";
const Contact = () => {
  return (
    <Content>
      <ContactMeContainer>
        <div>
          <ContactHeader>Contact Me</ContactHeader>
        </div>
        <div>
          <h2>Let's get in touch</h2>
          <div>
            <h2>Name</h2>
            <TextParagraph>Nuanjan Schluntz (Noon)</TextParagraph>
          </div>
          <div>
            <h2>Number</h2>
            <ContactIcon>
              <IconSpan>
                <GiVibratingSmartphone size="20px" />
              </IconSpan>
              <TextParagraph>(857) 265 5359</TextParagraph>
            </ContactIcon>
          </div>
          <div>
            <h2>Email</h2>
            <ContactIcon>
              <IconSpan>
                <HiOutlineMail size="20px" />
              </IconSpan>
              <TextParagraph>nuanjan.schluntz@gmail.com</TextParagraph>
            </ContactIcon>
          </div>
          <div>
            <h2>Social Media</h2>
            <SocialMediaBtnContainer>
              <Link
                to={{ pathname: "https://twitter.com/NuanjanSchluntz" }}
                target="_blank"
              >
                <SocialMediaWrapper>
                  <TiSocialTwitterCircular size="60px" color="#4f4a41" />
                </SocialMediaWrapper>
              </Link>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/nuanjan-schluntz/",
                }}
                target="_blank"
              >
                <SocialMediaWrapper>
                  <TiSocialLinkedinCircular size="60px" color="#4f4a41" />
                </SocialMediaWrapper>
              </Link>
              <Link
                to={{ pathname: "https://github.com/Nuanjan" }}
                target="_blank"
              >
                <SocialMediaWrapper>
                  <VscGithub size="45px" color="#4f4a41" />
                </SocialMediaWrapper>
              </Link>
            </SocialMediaBtnContainer>
          </div>
        </div>
      </ContactMeContainer>
    </Content>
  );
};

export default Contact;
