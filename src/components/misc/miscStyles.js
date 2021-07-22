import styled, { keyframes } from "styled-components";
import colors from "../../globalStyles/colorStyles";

/*----------------- Social Media Button Container -------------------*/

export const SocialMediaBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

/*---- Container that Contain SocialMedia Resume and BackgroundImage -----*/

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

const slideUp = keyframes`
0%{
  transform: translateY(100%);
}
100%{
  transform: translateY(0);
}
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
  padding: 50px 40px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 60px;
    width: 100%;
  }
`;
export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} 3.2s ease;
  min-width: 320px;
  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const ImageAndBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
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

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

// ---------Backgroung Image Styling-------

export const BackGroundImage = styled.div`
  width: 90%;
`;
