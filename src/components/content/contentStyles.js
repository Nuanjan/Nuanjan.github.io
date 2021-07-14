import styled from "styled-components";

export const BackGroundImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  max-height: 550px;
  max-width: 450px;
  @media (min-width: 1000px) {
    max-height: 6500px;
    max-width: 550px;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  @media (min-width: 1000px) {
    position: static;
    width: auto;
    flex-grow: 1;
  }
`;
