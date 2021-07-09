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
  margin: 100px 10px 0 0;
`;

export const PortfolioImage = styled.img`
  max-width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: scale-down;

  @media (min-width: 1240px) {
    width: 50%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
  }
`;
export const PortfolioInformation = styled.div`
  padding: 15px;
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

  @media (min-width: 1240px) {
    display: flex;
    width: 90%;
    margin: 30px auto;
  }
`;

const ParentBtn = styled.button`
  width: 90%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #fffbc8;
  border-radius: 0.6em;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  margin: 10px;
  padding: 1em 2em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
`;

export const InheriteBtn = styled(ParentBtn)`
  border-color: #fffbc8;
  color: #fff;
  background-image: linear-gradient(45deg, #f9c325 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;

  &:hover {
    background-position: 0;
    color: #1f1c20;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
