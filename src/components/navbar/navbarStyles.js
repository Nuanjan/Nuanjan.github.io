import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";

/*------Navbar Containner------ */

export const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 305px;
`;

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

/*---------------Navbar Menu and Link ----------------*/

export const StyledMenu = styled.nav`
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
