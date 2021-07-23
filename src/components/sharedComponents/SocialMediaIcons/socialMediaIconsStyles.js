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

  margin: 30px auto;

  &: hover {
    // background-color: ${colors.lightGray};
    border: solid 3px ${colors.lightGray};
    //box-shadow: 5px 10px 15px grey;
  }
`;
