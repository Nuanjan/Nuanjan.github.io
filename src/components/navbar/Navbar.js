import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 0;
  @media (min-width: 1000px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 305px;
  }
`;

const Navbar = ({ open, setOpen }) => {
  return (
    <NavbarWrapper>
      <NavbarMobile open={open} setOpen={setOpen} />
      <NavbarDesktop open={open} setOpen={setOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
