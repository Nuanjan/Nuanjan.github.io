import React from "react";
import BackgroundImg from "./BackgroundImg";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  ParagraphContainer,
  AboutMeContainer,
  ImageAndBtnContainer,
  ResumeLink,
  LinkContainer,
} from "./miscStyles";

const ContainerWithResumeAndImage = (props) => {
  return (
    <AboutMeContainer>
      <ParagraphContainer>{props.children}</ParagraphContainer>
      <ImageAndBtnContainer>
        <LinkContainer>
          <SocialMediaIcon />
          <ResumeLink
            href="https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </ResumeLink>
        </LinkContainer>
        <BackgroundImg />
      </ImageAndBtnContainer>
    </AboutMeContainer>
  );
};

export default ContainerWithResumeAndImage;
