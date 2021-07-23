import styled, { keyframes } from "styled-components";
import colors from "../../../globalStyles/colorStyles";

export const ImageAndBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

/*---------- ResumeLink ------------*/
const rainbowTextSimpleAnimationRev = keyframes`
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

const rainbowTextSimpleAnimation = keyframes`{
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

export const ResumeLink = styled.a`
  text-decoration: none;
  color: ${colors.coolWhite};
  font-size: 2.5rem;
  font-weight: 900;
	text-transform: uppercase;
	text-decoration: none;
	border-radius: 30px;
	display: inline-block;
	border: dotted ${colors.coolWhite} 3px;
  padding:10px 20px;
  margin: 50px 0;
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
  animation: ${rainbowTextSimpleAnimationRev} 1s ease forwards;
    &:hover {
        animation: ${rainbowTextSimpleAnimation} 0.6s ease-in forwards;  
    }
}
  &:hover{
    transform: scale(1.1);
  }
  @medai(min-width: 1000px) {
    margin-bottom: 20px;
  }
`;
