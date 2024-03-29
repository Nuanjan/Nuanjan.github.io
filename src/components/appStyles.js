import styled from "styled-components";
import colors from "../globalStyles/colorStyles";

export const AppContainer = styled.div`
  background-color: ${colors.coolWhite};
  width: 100vw;
  display: flex;
  @media (min-width: 1000px) {
    border: 1px solid transparent;
    justify-content: flex-end;
  }
`;

export const ContentContainer = styled.div`
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
