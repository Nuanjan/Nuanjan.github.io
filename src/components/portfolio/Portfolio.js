import React from "react";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioText,
} from "./portfolioStyles";
import PortfolioDetail from "./PortfolioDetail";
import Content from "./../content/Content";

const Portfolio = () => {
  return (
    <Content>
      <PortfolioHeader>
        <PortfolioText>PROJECTS</PortfolioText>
      </PortfolioHeader>
      <PortfolioDetail />
    </Content>
  );
};

export default Portfolio;
