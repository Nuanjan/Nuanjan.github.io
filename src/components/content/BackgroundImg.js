import React from "react";
import { BackGroundImage } from "./contentStyles";
import bgImage from "../../images/portfolio-bg.png";

const BackgroundImg = () => {
  return (
    <BackGroundImage>
      <img
        src={bgImage}
        alt="me and my pugs"
        style={{
          objectFit: "cover",
        }}
      />
    </BackGroundImage>
  );
};

export default BackgroundImg;
