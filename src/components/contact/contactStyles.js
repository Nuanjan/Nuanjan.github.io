import styled from "styled-components";

export const SocialMediaBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1000px) {
    justify-content: start;
  }
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
  border: 3px solid #4b3830;
  margin: 150px 20px;
  padding: 20px;
  position: relative;

  @media (min-width: 1000px) {
    width: 90%;
    margin: 150px auto;
  }
`;

export const ContactHeader = styled.h1`
  position: absolute;
  top: -40px;
  left: 50px;
  background: #fff;
  padding: 0 20px;
  background-color: #e4e1dc;
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
