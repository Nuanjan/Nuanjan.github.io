import React from "react";
import styled from "styled-components";
import colors from "../../../globalStyles/colorStyles";
import {
  rainbowTextAnimation,
  rainbowTextAnimationOnHover,
} from "../../../globalStyles/rainbowTextAnimation";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;
const ResumeLink = styled.a`
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
  box-shadow: 10px 9px 12px #383838;
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
  animation: ${rainbowTextAnimation} 1s ease forwards;
    &:hover {
        animation: ${rainbowTextAnimationOnHover} 0.6s ease-in forwards;  
    }
}
  &:hover{
    transform: scale(1.1);
  }
  &:active{
    box-shadow: 8px 7px 10px #242526;
    transform: scale(0.9);
  }
  @medai(min-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const ResumeButton = () => {
  return (
    <LinkContainer>
      <ResumeLink
        href="https://docs.google.com/document/d/14K25CNIkuaYqbpzEYuxf3B4VUadUb0hr/edit?usp=sharing&ouid=115502355986075599382&rtpof=true&sd=true"
        target="_blank"
      >
        RESUME
      </ResumeLink>
    </LinkContainer>
  );
};

export default ResumeButton;
