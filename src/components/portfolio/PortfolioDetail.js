import React from "react";
import { Link } from "react-router-dom";
import {
  PortfolioDetailCard,
  PortfolioImage,
  PortfolioInformation,
  InheriteBtn,
  BtnContainer,
} from "./portfolioStyles";
import { PortfolioData } from "./PortfolioData";

const PortfolioDetail = () => {
  const portData = PortfolioData.map((port, index) => (
    <PortfolioDetailCard key={index}>
      <PortfolioImage src={port.imgUrl} />
      <PortfolioInformation>
        <h2>{port.projectName}</h2>
        <p>
          <span>Techlologies: </span>
          {port.technologies}
        </p>
        <p>{port.detail}</p>
        <BtnContainer>
          <Link
            to={{ pathname: port.appLink }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <InheriteBtn>App Link</InheriteBtn>
          </Link>
          {port.ghFrontEndLink && (
            <Link
              to={{ pathname: port.ghFrontEndLink }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>GitHub FrontEnd Link</InheriteBtn>
            </Link>
          )}
          {port.ghBackEndLink && (
            <Link
              to={{ pathname: port.ghBackEndLink }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>GitHub BackEnd Link</InheriteBtn>
            </Link>
          )}
        </BtnContainer>
      </PortfolioInformation>
    </PortfolioDetailCard>
  ));
  return <div>{portData}</div>;
};

export default PortfolioDetail;
