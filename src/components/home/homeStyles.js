import styled from "styled-components";

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
