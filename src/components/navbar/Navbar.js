import React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarBurger from "./NavbarBurger";
import { NavbarWrapper } from "./navbarStyles";

const Navbar = ({ open, setOpen }) => {
  return (
    <NavbarWrapper>
      <NavbarBurger open={open} setOpen={setOpen} />
      <NavbarMenu open={open} setOpen={setOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
