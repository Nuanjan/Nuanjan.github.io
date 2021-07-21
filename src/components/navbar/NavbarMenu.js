import React from "react";
import { StyledMenu } from "./navbarStyles";
import { Link } from "react-router-dom";

const NavbarMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(false)}>
        <a href="/">HOME</a>
      </Link>
      <a
        href="https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing"
        target="_blank"
        onClick={() => setOpen(false)}
      >
        RESUME
      </a>
      <Link to="/portfolio" onClick={() => setOpen(false)}>
        <a href="/">PROJECTS</a>
      </Link>
      <Link to="/contact" onClick={() => setOpen(false)}>
        <a href="/">CONTACT</a>
      </Link>
    </StyledMenu>
  );
};

export default NavbarMenu;
