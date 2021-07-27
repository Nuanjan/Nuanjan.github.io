import styled from "styled-components";
import colors from "../../../globalStyles/colorStyles";

/*----------------- Social Media Button Container -------------------*/

export const SocialMediaBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMediaIcon = styled.div`
  border-radius: 25px;
  cursor: pointer;
  margin: 30px auto;

  &: hover {
    border: solid 5px ${colors.lightGray};
  }
  &: active {
    border: solid 0 ${colors.lightGray};
    background-color: ${colors.lightGray};
  }
`;
