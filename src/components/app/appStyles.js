import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";

export const AppContainer = styled.div`
  background-color: ${colors.coolWhite};
  width: 100vw;
  display: flex;
  @media (min-width: 1000px) {
    border: 1px solid transparent;
    justify-content: flex-end;
  }
`;
