import React from "react";
import { BackGroundImage } from "./contentStyles";
import bgImage from "../../images/portfolio-bg.png";
import Content from "./Content";

const BackgroundImg = () => {
  return (
    <BackGroundImage>
      <img
        src={bgImage}
        alt="me and my pugs"
        style={{
          height: "auto",
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </BackGroundImage>
  );
};

export default BackgroundImg;
