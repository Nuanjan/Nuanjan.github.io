import React from "react";
import colors from "../../globalStyles/colorStyles";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import { SocialMediaBtnContainer } from "./contactStyles";
const SociaMediaIcon = () => {
  return (
    <SocialMediaBtnContainer>
      <Link
        to={{ pathname: "https://twitter.com/NuanjanSchluntz" }}
        target="_blank"
      >
        {/* <SocialMediaWrapper> */}
        <TiSocialTwitterCircular size="60px" color={colors.socialLink} />
        {/* </SocialMediaWrapper> */}
      </Link>
      <Link
        to={{
          pathname: "https://www.linkedin.com/in/nuanjan-schluntz/",
        }}
        target="_blank"
      >
        {/* <SocialMediaWrapper> */}
        <TiSocialLinkedinCircular size="60px" color={colors.socialLink} />
        {/* </SocialMediaWrapper> */}
      </Link>
      <Link to={{ pathname: "https://github.com/Nuanjan" }} target="_blank">
        {/* <SocialMediaWrapper> */}
        <TiSocialGithubCircular size="60px" color={colors.socialLink} />
        {/* </SocialMediaWrapper> */}
      </Link>
    </SocialMediaBtnContainer>
  );
};

export default SociaMediaIcon;
