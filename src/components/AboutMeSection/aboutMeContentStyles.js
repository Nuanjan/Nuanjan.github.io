import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";
import {
  rainbowTextAnimation,
  rainbowTextAnimationOnHover,
} from "../../globalStyles/rainbowTextAnimation";

export const AboutMeHeader = styled.h1`
  color: ${colors.darkBlue};
  text-align: center;
  margin-top: 100px;
  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export const AboutMeText = styled.p`
  text-indent: 40px;
  margin-bottom: 50px;
  text-align: justify;
  color: ${colors.darkBlue};
  font-size: 1.5rem;
  line-height: 1.5;
  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

export const TextSpan = styled.span`
  font-size: 2.5rem;
	font-family: 'Sigmar One', cursive;
	letter-spacing: 2px;
	text-align: center;
  background-color: #0cbaba;
	background-image: linear-gradient(
        315deg,
        #09c5e4 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #6b0f1a 83.333%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  animation: ${rainbowTextAnimation} 1s ease forwards;
    &:hover {
        animation: ${rainbowTextAnimationOnHover} 0.6s ease-in forwards;  
    }
}
`;
