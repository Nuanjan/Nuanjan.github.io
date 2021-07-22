import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {
  PortfolioImage,
  PortfolioInformation,
  InheriteBtn,
  BtnContainer,
  IconSpan,
  PortfolioCard,
  PortfolioProjectName,
  PortfolioProjectText,
  PortfolioCardWrap,
  ButtonText,
  ProtfolioCardContainer,
  PortfolioProjectTechnologies,
  PortfolioContentContainer,
} from "./portfolioStyles";
import { PortfolioData } from "./PortfolioData";

const PortfolioDetail = () => {
  const portData = PortfolioData.map((port, index) => (
    <PortfolioCard key={index}>
      <PortfolioImage src={port.imgUrl} />
      <PortfolioInformation>
        <PortfolioContentContainer>
          <PortfolioProjectName>{port.projectName}</PortfolioProjectName>
          <PortfolioProjectTechnologies>
            <span>Technologies: </span>
            {port.technologies}
          </PortfolioProjectTechnologies>
          <PortfolioProjectText>{port.detail}</PortfolioProjectText>
        </PortfolioContentContainer>
        <BtnContainer>
          <Link
            to={{ pathname: port.appLink }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <InheriteBtn>
              <IconSpan>
                <CgWebsite size="30px" />
              </IconSpan>
              Demo
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
                  <FaGithub size="30px" />
                </IconSpan>
                Code
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
                  <FaGithub size="30px" />
                </IconSpan>
                Code
              </InheriteBtn>
            </Link>
          )}
        </BtnContainer>
      </PortfolioInformation>
    </PortfolioCard>
  ));

  return <PortfolioCardWrap>{portData}</PortfolioCardWrap>;
};

export default PortfolioDetail;
