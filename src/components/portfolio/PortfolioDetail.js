import React from "react";
import {
  PortfolioDetailCard,
  PortfolioImage,
  PortfolioInformation,
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
        <div>
          <button>App Link</button>
          <button disabled={!port.ghFrontEndLink}>GitHub FrontEnd Link</button>
          <button disabled={!port.ghBackEndLink}>GitHub Backend Link</button>
        </div>
      </PortfolioInformation>
    </PortfolioDetailCard>
  ));
  return <div>{portData}</div>;
};

export default PortfolioDetail;
