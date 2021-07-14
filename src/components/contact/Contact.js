import React from "react";
import Content from "./../content/Content";
import BackgroundImg from "./../content/BackgroundImg";
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
} from "./contactStyles";
const Contact = () => {
  return (
    <Content>
      <ContactMeContainer>
        <div>
          <ContactHeader>Contact Me</ContactHeader>
        </div>
        <div>
          <h3>Let get in touch</h3>
          <div>
            <h2>name</h2>
            <h2>Nuanjan Schluntz (Noon)</h2>
          </div>
          <div>
            <h2>number</h2>
            <ContactIcon>
              <IconSpan>
                <GiVibratingSmartphone size="20px" />
              </IconSpan>
              <h3>(857) 265 5359</h3>
            </ContactIcon>
          </div>
          <div>
            <h2>email</h2>
            <ContactIcon>
              <IconSpan>
                <HiOutlineMail size="20px" />
              </IconSpan>
              <h3>nuanjan.schluntz@gmail.com</h3>
            </ContactIcon>
          </div>
          <div>
            <h2>social media</h2>
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
      <BackgroundImg />
    </Content>
  );
};

export default Contact;
