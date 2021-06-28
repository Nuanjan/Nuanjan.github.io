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
      <PortfolioContainer>
        <PortfolioHeader>
          <PortfolioText>PORTFOLIO</PortfolioText>
        </PortfolioHeader>
        <PortfolioDetail />
      </PortfolioContainer>
    </Content>
  );
};

export default Portfolio;
