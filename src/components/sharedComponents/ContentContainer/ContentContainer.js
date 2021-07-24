import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0%{
  transform: translateY(100%);
}
100%{
  transform: translateY(0);
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} 3.2s ease;
  min-width: 320px;
  @media (min-width: 1000px) {
    width: 45%;
  }
`;

const ContentContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default ContentContainer;
