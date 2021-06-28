import React from "react";
import { BackGroundImage } from "./contentStyles";
import bgImage from "../../images/portfolio-bg.png";
import Content from "./Content";

const BackgroundImg = () => {
  return (
    <BackGroundImage>
      <img src={bgImage} alt="me and my pugs" style={{ height: "auto" }} />
    </BackGroundImage>
  );
};

export default BackgroundImg;
