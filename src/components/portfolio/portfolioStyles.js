import styled, { keyframes } from "styled-components";

export const PortfolioHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioText = styled.h1`
  color: #afc0c9;
  font-size: 2em;
  text-shadow: 1px 1px 2px #1d323f, 0 0 1em #dcdbe2, 0 0 0.2em #d4d7db;
`;

export const PortfolioContainer = styled.section`
  background-color: #1d323f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const PortfolioCardWrap = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const PortfolioCard = styled.div`
  width: 80%;
  background-color: #f5fffa;
  box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -moz-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -webkit-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -o-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  @media (min-width: 1000px) {
    max-width: 45%;
    margin: 20px;
    min-height: 600px;
  }
`;

// export const PortfolioImageDiv = styled.div``;
export const PortfolioImage = styled.img`
  object-fit: cover;
  border: solid black 1px;
  width: 100%;
  height: 100%;
`;
export const PortfolioInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ParentBtn = styled.button`
  color: #afc0c9;
  width: 90%;
  margin: 10px auto;
  box-sizing: border-box;
  appearance: none;
  background-color: #20334c;
  border: 2px solid #d3dae4;
  border-radius: 0.6em;
  cursor: pointer;
`;

export const InheriteBtn = styled(ParentBtn)`
  color: #afc0c9;
  background-image: linear-gradient(45deg, #476176 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    background-position: 0;
    color: #afc0c9;
  }
  @media (min-width: 1000px) {
    height: 30px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1000px) {
  }
`;

export const IconSpan = styled.span`
  margin-right: 10px;
`;

export const PortfolioProjectName = styled.h2`
  color: #100110;
  padding: 0 10px;
`;

export const PortfolioProjectText = styled.p`
  color: #242526;
  padding: 0 10px;
`;

export const ButtonText = styled.p`
  color: #afc0c9;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  @media (min-width: 1000px) {
    font-size: 0.9rem;
  }
`;
