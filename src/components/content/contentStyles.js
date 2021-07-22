import styled from "styled-components";

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
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const AllContentContainer = styled.div`
  display: flex;
  flex-direction: colum;
`;
