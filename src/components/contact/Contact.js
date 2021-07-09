import React from "react";
import Content from "./../content/Content";
import BackgroundImg from "./../content/BackgroundImg";
import { GiVibratingSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
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
            <h4>number</h4>
            <ContactIcon>
              <IconSpan>
                <GiVibratingSmartphone size="20px" />
              </IconSpan>
              (857) 265 5359
            </ContactIcon>
          </div>
          <div>
            <h4>email</h4>
            <ContactIcon>
              <IconSpan>
                <HiOutlineMail size="20px" />
              </IconSpan>
              nuanjan.schluntz@gmail.com
            </ContactIcon>
          </div>
          <div>
            <h4>social media</h4>
            <SocialMediaBtnContainer>
              <Link
                to={{ pathname: "https://www.facebook.com/nuanjan.peamarun" }}
                target="_blank"
              >
                <SocialMediaWrapper>
                  <RiFacebookCircleLine size="48px" color="#4f4a41" />
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
