import React from "react";
import { BackGroundImage } from "./contentStyles";
import bgImage from "../../images/portfolio-bg.png";

const BackgroundImg = ({ open, setOpen }) => {
  return (
    <BackGroundImage open={open} setOpen={setOpen}>
      <img src={bgImage} alt="me and my pugs" style={{ height: "auto" }} />
    </BackGroundImage>
  );
};

export default BackgroundImg;
