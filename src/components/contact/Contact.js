import React from "react";
import Content from "./../content/Content";
import BackgroundImg from "./../content/BackgroundImg";
import { GiVibratingSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import {
  SocialMediaBtnContainer,
  SocialMediaWrapper,
  ContactMeContainer,
  ContactHeader,
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
            <div>
              <span>
                <GiVibratingSmartphone />
              </span>
              (857) 265 5359
            </div>
          </div>
          <div>
            <h4>email</h4>
            <div>
              <span>
                <HiOutlineMail />
              </span>
              nuanjan.schluntz@gmail.com
            </div>
          </div>
          <div>
            <h4>social media</h4>
            <SocialMediaBtnContainer>
              <SocialMediaWrapper>
                <RiFacebookCircleLine size="48px" color="#4f4a41" />
              </SocialMediaWrapper>
              <SocialMediaWrapper>
                <TiSocialLinkedinCircular size="60px" color="#4f4a41" />
              </SocialMediaWrapper>
              <SocialMediaWrapper>
                <VscGithub size="45px" color="#4f4a41" />
              </SocialMediaWrapper>
            </SocialMediaBtnContainer>
          </div>
        </div>
      </ContactMeContainer>
      <BackgroundImg />
    </Content>
  );
};

export default Contact;
