import React from "react";
import { AboutMeHeader, AboutMeText, TextSpan } from "./aboutMeContentStyles";
import ContentContainer from "../sharedComponents/ContentContainer";
import SocialMediaIcons from "../sharedComponents/SocialMediaIcons";
import ResumeButton from "../sharedComponents/ResumeButton";
const AboutMeContent = () => {
  return (
    <ContentContainer>
      <AboutMeHeader id="aboutMe">
        Hi! I am<TextSpan>NOON,</TextSpan>
        <br />I am a <TextSpan>FRONTEND</TextSpan> software engineer.
      </AboutMeHeader>
      <SocialMediaIcons />
      <AboutMeText>
        I am a problem solver. I work well under pressure, and I am eager to
        learn the new technologies. I have experience working on HTML, CSS,
        JavaScript, React, using public APIs, creating my own APIs and API
        testing. I'm excited to continue growing my skills. One thing you can
        count on is the strong work ethic that I will bring with me everyday.
      </AboutMeText>
      <ResumeButton />
    </ContentContainer>
  );
};

export default AboutMeContent;
