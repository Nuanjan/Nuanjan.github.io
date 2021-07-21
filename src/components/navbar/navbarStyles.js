import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: begin;
  align-items: center;
  background: rgba(145, 88, 88, 0.9);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 100%;

  a {
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffeaf6;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 2.5rem;
    position: relative;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2.5px;
    bottom: 0;
    left: 0;
    background-color: #232a3a;
    background: linear-gradient(0.15turn, #fb2dc0, #ffe45e, #0ef9e6);
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
    height: 100%;
    justify-content: space-around;
    transform: none;
  }
  a {
    justify-self: start;
  }
`;

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
    background: ${({ open }) => (open ? "#f5f6de" : "#4b3830")};
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

export const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 305px;
`;
