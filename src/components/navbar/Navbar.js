import React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarBurger from "./NavbarBurger";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 305px;
`;

const Navbar = ({ open, setOpen }) => {
  return (
    <NavbarWrapper>
      <NavbarBurger open={open} setOpen={setOpen} />
      <NavbarMenu open={open} setOpen={setOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
