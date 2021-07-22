import React from "react";
import BackgroundImg from "./BackgroundImg";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "../contact/Contact";
import SociaMediaIcon from "../contact/SociaMediaIcon";
import {
  ParagraphContainer,
  HomeContainer,
  AboutMeContainer,
  ImageAndBtnContainer,
  ResumeLink,
  LinkContainer,
} from "./homeStyles";

const Home = (props) => {
  return (
    <HomeContainer>
      <AboutMeContainer>
        <ParagraphContainer>{props.children}</ParagraphContainer>
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
