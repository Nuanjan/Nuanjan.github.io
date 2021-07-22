import styled from "styled-components";

export const SocialMediaBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  @media (min-width: 1000px) {
    margin-right: 50px;
  }
`;

export const ContactMeContainer = styled.div`
  width: 100%;
`;

export const ContactHeader = styled.h1``;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

export const TextParagraph = styled.p`
  font-size: 1.5rem;
`;

export const ContactMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
