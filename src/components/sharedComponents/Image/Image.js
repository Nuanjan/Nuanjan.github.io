import React from "react";
import bgImage from "../../../images/portfolio-bg.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Image = () => {
  return (
    <ImageContainer>
      <img
        src={bgImage}
        alt="me and my pugs"
        style={{
          objectFit: "contain",
          width: "90%",
          margin: "20px",
        }}
      />
    </ImageContainer>
  );
};

export default Image;
