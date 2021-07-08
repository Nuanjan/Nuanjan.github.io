import styled from "styled-components";

export const SocialMediaBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`;

export const ContactMeContainer = styled.div`
  border: 3px solid #4b3830;
  margin: 150px 20px;
  padding: 20px;
  position: relative;

  @media (min-width: 1000px) {
    width: 200%;
    right: -20%;
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
