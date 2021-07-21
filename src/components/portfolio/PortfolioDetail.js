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
  PortfolioCardWrap,
  PortfolioProjectName,
  PortfolioProjectText,
  ButtonText,
} from "./portfolioStyles";
import { PortfolioData } from "./PortfolioData";

const PortfolioDetail = () => {
  const portData = PortfolioData.map((port, index) => (
    <PortfolioCardWrap>
      <PortfolioCard key={index}>
        <PortfolioImage src={port.imgUrl} />
        <PortfolioInformation>
          <PortfolioProjectName>{port.projectName}</PortfolioProjectName>
          <PortfolioProjectText>
            <span>Techlologies: </span>
            {port.technologies}
          </PortfolioProjectText>
          <PortfolioProjectText>{port.detail}</PortfolioProjectText>
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
                <ButtonText>App Link</ButtonText>
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
                  <ButtonText>GitHub FrontEnd Link</ButtonText>
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
                  <ButtonText>GitHub BackEnd Link</ButtonText>
                </InheriteBtn>
              </Link>
            )}
          </BtnContainer>
        </PortfolioInformation>
      </PortfolioCard>
    </PortfolioCardWrap>
  ));
  return <div>{portData}</div>;
};

export default PortfolioDetail;
