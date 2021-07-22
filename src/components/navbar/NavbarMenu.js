import React from "react";
import { StyledMenu } from "./navbarStyles";

const NavbarMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a href="#aboutMe" onClick={() => setOpen(false)}>
        HOME
      </a>
      <a
        href="https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        onClick={() => setOpen(false)}
      >
        RESUME
      </a>
      <a href="#projects" onClick={() => setOpen(false)}>
        PROJECTS
      </a>
      <a href="#contact" onClick={() => setOpen(false)}>
        CONTACT
      </a>
    </StyledMenu>
  );
};

export default NavbarMenu;
