import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {
  PortfolioDetailCard,
  PortfolioImage,
  PortfolioInformation,
  InheriteBtn,
  BtnContainer,
  IconSpan,
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
            <InheriteBtn>
              <IconSpan>
                <CgWebsite size="20px" />
              </IconSpan>
              <p>App Link</p>
            </InheriteBtn>
          </Link>
          {port.ghFrontEndLink && (
            <Link
              to={{ pathname: port.ghFrontEndLink }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>
                <IconSpan>
                  <FaGithub size="20px" />
                </IconSpan>
                <p>GitHub FrontEnd Link</p>
              </InheriteBtn>
            </Link>
          )}
          {port.ghBackEndLink && (
            <Link
              to={{ pathname: port.ghBackEndLink }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>
                <IconSpan>
                  <FaGithub size="20px" />
                </IconSpan>
                <p>GitHub BackEnd Link</p>
              </InheriteBtn>
            </Link>
          )}
        </BtnContainer>
      </PortfolioInformation>
    </PortfolioDetailCard>
  ));
  return <div>{portData}</div>;
};

export default PortfolioDetail;
