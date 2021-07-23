import React from "react";
import colors from "../../../globalStyles/colorStyles";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { SocialMediaBtnContainer } from "./socialMediaIconsStyles";

const SocialMediaIcons = () => {
  return (
    <SocialMediaBtnContainer>
      <a href="https://twitter.com/NuanjanSchluntz" target="_blank">
        <TiSocialTwitterCircular size="60px" color={colors.socialLink} />
      </a>
      <a href="https://www.linkedin.com/in/nuanjan-schluntz/" target="_blank">
        <TiSocialLinkedinCircular size="60px" color={colors.socialLink} />
      </a>
      <a href="https://github.com/Nuanjan" target="_blank">
        <TiSocialGithubCircular size="60px" color={colors.socialLink} />
      </a>
    </SocialMediaBtnContainer>
  );
};

export default SocialMediaIcons;
