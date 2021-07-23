import React from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import bgImage from "../../../images/portfolio-bg.png";

import {
  ParagraphContainer,
  ImageAndBtnContainer,
  ResumeLink,
  LinkContainer,
} from "./resumeAndImageStyles";

const ResumeAndImage = () => {
  return (
    <ImageAndBtnContainer>
      <LinkContainer>
        <SocialMediaIcons />
        <ResumeLink
          href="https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing"
          target="_blank"
        >
          RESUME
        </ResumeLink>
      </LinkContainer>
      <img
        src={bgImage}
        alt="me and my pugs"
        style={{
          objectFit: "contain",
          width: "90%",
          margin: "20px",
        }}
      />
    </ImageAndBtnContainer>
  );
};

export default ResumeAndImage;
