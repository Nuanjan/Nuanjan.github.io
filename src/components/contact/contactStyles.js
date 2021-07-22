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
export const ContactMeFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const ContactMeContainer = styled.div`
  border: 3px solid #4b3830;
  position: relative;
  width: 80%;
`;

export const ContactHeader = styled.h1`
  position: absolute;
  top: -40px;
  left: 50px;
  background: #fff;
  padding: 0 20px;
  background-color: #d4d7db;
  color: #4f4a41;
`;

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
