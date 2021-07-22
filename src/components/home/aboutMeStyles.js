import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0%{
  transform: translateY(100%);
}
100%{
  transform: translateY(0);
}

`;
const slideDown = keyframes`
0%{
  transform: translateY(-100%);
}
100%{
  transform: translateY(0);
}

`;

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

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideUp} 3.2s ease;
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
  animation: ${rainbowTextSimpleAnimationRev} 1s ease forwards;
    &:hover {
        animation: ${rainbowTextSimpleAnimation} 0.6s ease-in forwards;  
    }
}
`;

export const IconArrowDown = styled.div`
  height: 200px;
`;

export const ArrowWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-conten: center;
`;

export const AboutMeText = styled.p`
  text-align: center;
  color: #311432;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 50px;
  @media (min-width: 1000px) {
  }
`;
export const AboutMeHeader = styled.h1`
  color: #3c1361;
  padding: 20px;
`;
export const BackGroundImage = styled.div`
  width: 90%;
  position: relative;
`;
export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    width: calc(100% - 305px);
    justify-content: space-around;
    align-items: flex-end;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
