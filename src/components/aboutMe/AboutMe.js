import React from "react";
import ContainerWithResumeAndImage from "../misc/ContainerWithResumeAndImage";
import { AboutMeHeader, AboutMeText, TextSpan } from "./aboutMeStyles";

const AboutMe = () => {
  return (
    <ContainerWithResumeAndImage>
      <AboutMeHeader id="aboutMe">
        Hi! My name is <TextSpan>NUANJAN,</TextSpan>
        <br />
        or you can call me <TextSpan>NOON.</TextSpan>
      </AboutMeHeader>
      <AboutMeText>
        I am a Software Engineer (Frontend Focus). I have experience working on
        HTML, CSS, JavaScript, React, using public APIs, creating my own APIs
        and API testing. I am a problem solver. I work well under pressure, and
        I am eager to learn the new technologies. I'm excited to continue
        growing my skills. One thing you can count on is the strong work ethic
        that I will bring with me everyday.
      </AboutMeText>
    </ContainerWithResumeAndImage>
  );
};

export default AboutMe;
