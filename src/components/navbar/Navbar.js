import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarBurger from "./NavbarBurger";

const Navbar = ({ open, setOpen }) => {
  return (
    <div>
      <NavbarBurger open={open} setOpen={setOpen} />
      <NavbarMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
