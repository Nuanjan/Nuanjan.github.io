import React from "react";
import colors from "../../../globalStyles/colorStyles";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import {
  SocialMediaBtnContainer,
  SocialMediaIcon,
} from "./socialMediaIconsStyles";

const SocialMediaIcons = () => {
  return (
    <SocialMediaBtnContainer>
      <a href="https://twitter.com/NuanjanSchluntz" target="_blank">
        <SocialMediaIcon>
          <TiSocialTwitterCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
      <a href="https://www.linkedin.com/in/nuanjan-schluntz/" target="_blank">
        <SocialMediaIcon>
          <TiSocialLinkedinCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
      <a href="https://github.com/Nuanjan" target="_blank">
        <SocialMediaIcon>
          {" "}
          <TiSocialGithubCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
    </SocialMediaBtnContainer>
  );
};

export default SocialMediaIcons;
