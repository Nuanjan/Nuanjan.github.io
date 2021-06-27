import React from "react";
import { PortfolioDetailWrapper } from "./portfolioStyles";
import { PortfolioData } from "./PortfolioData";

const PortfolioDetail = () => {
  const portData = PortfolioData.map((port, index) => (
    <div key={index}>
      <h2>{port.projectName}</h2>
      <p>{port.technologies}</p>
      <p>{port.detail}</p>
      <div>
        <button>App Link</button>
        <button disabled={!port.ghFrontEndLink}>GitHub FrontEnd Link</button>
        <button disabled={!port.ghBackEndLink}>GitHub Backend Link</button>
      </div>
    </div>
  ));
  return <PortfolioDetailWrapper>{portData}</PortfolioDetailWrapper>;
};

export default PortfolioDetail;
