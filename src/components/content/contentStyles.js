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
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    width: calc(100% - 305px);
  }
`;
