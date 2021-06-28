import styled, { keyframes } from "styled-components";

export const PortfolioHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioText = styled.h1`
  display: inline-block;
  color: #232a3a;
  font-size: 2em;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
`;

export const PortfolioContainer = styled.section`
  margin-top: 100px;
`;

export const PortfolioImage = styled.img`
  max-width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const PortfolioInformation = styled.div`
  padding: 10px;
  color: #e0dee9;
`;

export const PortfolioDetailCard = styled.div`
  margin: 20px;
  border-radius: 20px;
  background-color: #4b3830;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
