import React from "react";
import { BackGroundImage } from "./homeStyles";
import bgImage from "../../images/portfolio-bg.png";

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
