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

const bounce = keyframes`{
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  animation: ${slideUp} 3.2s ease;
`;

export const TextSpan = styled.span`
  font-size: 2.8rem;
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
  font-size: 1.8rem;
  line-height: 1.5;
`;
export const AboutMeHeader = styled.h1`
  color: #3c1361;
`;
