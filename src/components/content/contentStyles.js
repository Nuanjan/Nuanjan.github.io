import styled from "styled-components";

// export const ContentContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 450px;
// `;

export const BackGroundImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  max-height: 550px;
  max-width: 450px;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: end;
    position: static;
    width: auto;
  }
`;
