import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  background-color: #e4e1dc;

  @media (min-width: 1000px) {
    display: flex;
    border: 1px solid transparent;
  }
`;

const ResumeStretchAnimation = keyframes`
0% {
  transform: scale(.85);
  background-color: rgb(75, 31, 4, 0.2);
  border-radius: 30%;
}
50% {
  background-color: rgb(233, 231, 228, 0.4);
}
100% {
  transform: scale(.75);
  background-color: rgb(190, 118, 86, 0.8);
  border-radius: 10%;
}
`;

const ResumeStretchAnimationInsice = keyframes`
0% {
  transform: scale(1);
  background-color: rgb(121,64, 40, 1);
  border-radius: 10%;
}
50% {
  background-color: rgb(190, 118, 86, 0.6);
}
100% {
  transform: scale(.95);
  background-color: rgb(83, 44, 31, 0.4);
  border-radius: 30%;
}
`;

export const ResumeBtn = styled.div`
  position: fixed;
  right: 0;
  margin-top: 30px;
  transition: bottom 1.5s linear;
  bottom: ${({ slideDown }) => slideDown && "0"};
  height: 60px;
  width: 150px;
  z-index: 5;
  background-color: #4b1f0e;
  animation: ${ResumeStretchAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
  @media (min-width: 1000px) {
    height: 110px;
    width: 205px;
  }
`;

export const ResumeBtnInside = styled.div`
  height: 50px;
  width: 130px;
  background-color: #0e0504;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  animation-name: ${ResumeStretchAnimationInsice};
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
  & span {
    font-size: 24px;
    font-weight: 400;
    animation: none;
  }

  @media (min-width: 1000px) {
    height: 100px;
    width: 200px;
    & span {
      font-size: 32px;
      font-weight: 600;
      animation: none;
    }
  }
`;
