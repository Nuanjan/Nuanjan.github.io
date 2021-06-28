import React from "react";
import { StyledMenu } from "./navbarStyles";
import { Link } from "react-router-dom";

const NavbarMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(false)}>
        <a href="/">HOME</a>
      </Link>
      <Link to="/portfolio" onClick={() => setOpen(false)}>
        <a href="/">PORTFOLIO</a>
      </Link>
      <Link to="/contact" onClick={() => setOpen(false)}>
        <a href="/">CONTACT</a>
      </Link>
    </StyledMenu>
  );
};

export default NavbarMenu;
