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
      <a
        href="https://twitter.com/NuanjanSchluntz"
        target="_blank"
        rel="noreferrer"
        aria-label="my twitter profile link"
      >
        <SocialMediaIcon>
          <TiSocialTwitterCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/noon-schluntz/"
        target="_blank"
        rel="noreferrer"
        aria-label="my linkedin profile link"
      >
        <SocialMediaIcon>
          <TiSocialLinkedinCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
      <a
        href="https://github.com/Nuanjan"
        target="_blank"
        rel="noreferrer"
        aria-label="my github profile link"
      >
        <SocialMediaIcon>
          <TiSocialGithubCircular size="60px" color={colors.socialLink} />
        </SocialMediaIcon>
      </a>
    </SocialMediaBtnContainer>
  );
};

export default SocialMediaIcons;
