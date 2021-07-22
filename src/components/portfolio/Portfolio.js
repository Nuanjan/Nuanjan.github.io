import React from "react";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioText,
} from "./portfolioStyles";
import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <PortfolioText>PROJECTS</PortfolioText>
      </PortfolioHeader>
      <PortfolioDetail />
    </PortfolioContainer>
  );
};

export default Portfolio;
