import React from "react";
import BackgroundImg from "./BackgroundImg";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "../contact/Contact";
import SociaMediaIcon from "../contact/SociaMediaIcon";
import {
  ParagraphContainer,
  TextSpan,
  AboutMeText,
  AboutMeHeader,
  HomeContainer,
  AboutMeContainer,
  ImageAndBtnContainer,
  ResumeLink,
  LinkContainer,
} from "./aboutMeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <AboutMeContainer>
        <ParagraphContainer>
          <AboutMeHeader>
            Hi! My name is <TextSpan>NUANJAN,</TextSpan>
            <br />
            or you can call me <TextSpan>NOON.</TextSpan>
          </AboutMeHeader>
          <AboutMeText>
            I am a Software Engineer (Frontend Focus). I have experience working
            on HTML, CSS, JavaScript, React, using public APIs, creating my own
            APIs and API testing. I am a problem solver. I work well under
            pressure, and I am eager to learn the new technologies. I'm excited
            to continue growing my skills. One thing you can count on is the
            strong work ethic that I will bring with me everyday.
          </AboutMeText>
        </ParagraphContainer>
        <ImageAndBtnContainer>
          <LinkContainer>
            <ResumeLink
              href="https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </ResumeLink>

            <SociaMediaIcon />
          </LinkContainer>
          <BackgroundImg />
        </ImageAndBtnContainer>
      </AboutMeContainer>
      <Portfolio />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
