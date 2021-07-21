import styled, { keyframes } from "styled-components";

export const PortfolioHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioText = styled.h1`
  color: #232a3a;
  font-size: 2em;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
`;

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  justify-content: center;
`;
export const PortfolioCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  @media (min-width: 1000px) {
    flex-direction: row;
    height: 500px;
    width: 100%;
  }
`;
export const PortfolioCard = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(transparent, #7c5295);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.1),
    0 3.7px 3.3px rgba(0, 0, 0, 0.06), 0 0 0 rgba(0, 0, 0, 0.1),
    0 10.3px 17.9px rgba(0, 0, 0, 0.5), 0 41.8px 33.4px rgba(0, 0, 0, 0.3),
    0 100px 80px rgba(0, 0, 0, 0.2);
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 80%;
  }
`;

// export const PortfolioImageDiv = styled.div``;
export const PortfolioImage = styled.img`
  object-fit: cover;
  width: 100%;
  @media (min-width: 100px) {
    width: 40%;
  }
`;
export const PortfolioInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ParentBtn = styled.button`
  width: 90%;
  height: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  appearance: none;
  background-color: #e6ffe3;
  border: 2px solid #acffab;
  border-radius: 0.6em;
  cursor: pointer;
`;

export const InheriteBtn = styled(ParentBtn)`
  color: #4b3830;
  background-image: linear-gradient(45deg, #90ee90 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    background-position: 0;
    color: #4b3830;
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
  font-size: 0.6rem;
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
