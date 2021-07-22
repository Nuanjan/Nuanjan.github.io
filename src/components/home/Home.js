import React from "react";
import BackgroundImg from "./BackgroundImg";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "../contact/Contact";
import {
  ParagraphContainer,
  TextSpan,
  AboutMeText,
  AboutMeHeader,
  HomeContainer,
  AboutMeContainer,
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
        <BackgroundImg />
      </AboutMeContainer>
      <Portfolio />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
