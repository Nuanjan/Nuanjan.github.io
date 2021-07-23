import React from "react";
import { NavbarMobileContainer } from "./navbarStyles";
import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";

/*---------------Navbar Burger toggle button --------------*/

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? colors.coolWhite : "#20334c")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

const NavbarMobile = ({ open, setOpen }) => {
  return (
    <NavbarMobileContainer open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </NavbarMobileContainer>
  );
};

export default NavbarMobile;
