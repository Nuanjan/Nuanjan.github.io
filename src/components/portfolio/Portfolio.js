import React from "react";
import { PortfolioContainer, PortfolioText } from "./portfolioStyles";
import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioText>PROJECTS</PortfolioText>
      <PortfolioDetail />
    </PortfolioContainer>
  );
};

export default Portfolio;
