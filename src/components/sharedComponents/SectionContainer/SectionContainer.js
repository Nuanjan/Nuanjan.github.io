import React from "react";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
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
const SectionContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default SectionContainer;
