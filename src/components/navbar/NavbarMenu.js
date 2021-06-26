import React from "react";
import { StyledMenu } from "./navbarStyles";

const NavbarMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">HOME</a>
      <a href="/">PORTFOLIO</a>
      <a href="/">ABOUT</a>
      <a href="/">CONTACT</a>
    </StyledMenu>
  );
};

export default NavbarMenu;
