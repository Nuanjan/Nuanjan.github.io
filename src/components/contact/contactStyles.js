import styled from "styled-components";

export const ContactMeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    align-items: flex-start;
  }
`;
export const ContactHeader = styled.h1`
  text-align: center;
`;

export const GetInTouchHeader = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-items: center;
  padding-bottom: 30px;
`;
export const TextParagraph = styled.p`
  font-size: 1.5rem;
`;

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;
