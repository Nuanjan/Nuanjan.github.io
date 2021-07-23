import { keyframes } from "styled-components";

export const rainbowTextAnimation = keyframes`
   {
    0% {
      background-size: 650%;
    }
    40% {
      background-size: 650%;
    }
    100% {
      background-size: 100%;
    }
  }
`;

export const rainbowTextAnimationOnHover = keyframes`{
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    }
}`;
