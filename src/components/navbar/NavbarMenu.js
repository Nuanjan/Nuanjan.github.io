import React from "react";
import { StyledMenu } from "./navbarStyles";
import { Link } from "react-router-dom";

const NavbarMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <a href="/">HOME</a>
      </Link>
      <Link to="/portfolio">
        <a href="/">PORTFOLIO</a>
      </Link>
      <Link to="/about">
        <a href="/">ABOUT</a>
      </Link>
      <Link to="/contact">
        <a href="/">CONTACT</a>
      </Link>
    </StyledMenu>
  );
};

export default NavbarMenu;
