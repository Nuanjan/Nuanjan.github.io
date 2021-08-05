import React from "react";
import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";
import { Link } from "react-scroll";

export const NavbarDesktopContainer = styled.nav`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  position: fixed;
  width: 100%;
  z-index: 50;
  height: 100%;
  a {
    margin-top: 50px;
    text-transform: uppercase;
    font-family: "Balsamiq Sans", cursive;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${colors.coolWhite};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 2rem;
    position: relative;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2.5px;
    bottom: 0;
    left: 0;
    background-color: ${colors.coolWhite};
    background: linear-gradient(0.15turn, ${colors.coolWhite});
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  @media (min-width: 1000px) {
    position: sticky;
    border-bottom: 4px dotted blue;
    height: 100%;
    justify-content: space-around;
    transform: none;
  }
  a {
    justify-self: start;
    margin-top: 0;
  }
`;

const NavbarDesktop = ({ open, setOpen }) => {
  return (
    <NavbarDesktopContainer open={open}>
      <Link
        activeClass="active"
        to="aboutMe"
        spy={true}
        smooth={true}
        delay={500}
        duration={1500}
      >
        <a
          href="#aboutMe"
          onClick={() => {
            setOpen(false);
          }}
        >
          ABOUT ME
        </a>
      </Link>
      <a
        href="https://drive.google.com/file/d/120cHw0U6NxWL4ivpcQBKbZIrd1GXHqyT/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        onClick={() => setOpen(false)}
      >
        RESUME
      </a>
      <Link to="projects" spy={true} smooth={true} delay={500} duration={1500}>
        <a href="#projects" onClick={() => setOpen(false)}>
          PROJECTS
        </a>
      </Link>
      <Link to="contact" spy={true} smooth={true} delay={500} duration={1500}>
        <a href="#contact" onClick={() => setOpen(false)}>
          CONTACT
        </a>
      </Link>
    </NavbarDesktopContainer>
  );
};

export default NavbarDesktop;
