import React from "react";
import colors from "../../globalStyles/colorStyles";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import { SocialMediaBtnContainer } from "./miscStyles";
const SocialMediaIcon = () => {
  return (
    <SocialMediaBtnContainer>
      <Link
        to={{ pathname: "https://twitter.com/NuanjanSchluntz" }}
        target="_blank"
      >
        <TiSocialTwitterCircular size="60px" color={colors.socialLink} />
      </Link>
      <Link
        to={{
          pathname: "https://www.linkedin.com/in/nuanjan-schluntz/",
        }}
        target="_blank"
      >
        <TiSocialLinkedinCircular size="60px" color={colors.socialLink} />
      </Link>
      <Link to={{ pathname: "https://github.com/Nuanjan" }} target="_blank">
        <TiSocialGithubCircular size="60px" color={colors.socialLink} />
      </Link>
    </SocialMediaBtnContainer>
  );
};

export default SocialMediaIcon;
