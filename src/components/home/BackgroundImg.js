import React from "react";
import { BackGroundImage } from "./aboutMeStyles";
import bgImage from "../../images/portfolio-bg-line.png";

const BackgroundImg = () => {
  return (
    <BackGroundImage>
      <img
        src={bgImage}
        alt="me and my pugs"
        style={{
          objectFit: "contain",
          width: "90%",
          margin: "20px",
        }}
      />
    </BackGroundImage>
  );
};

export default BackgroundImg;
