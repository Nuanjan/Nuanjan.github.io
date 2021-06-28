import styled from "styled-components";
// darkbrown = 4b3830
// likeBrown = 73533e
// navyBlue = 232a3a
// blackGray = 1f1c20
// mocca = ac9289
// lightBrownGray = d9cdc9
// lightGray = e0dee9
// grayBrow =7 36461

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: begin;
  padding-top: 100px;
  align-items: center;
  background: rgba(172, 146, 137, 0.9);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  position: sticky;
  z-index: 10;
  height: 1200px;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #f5f6de;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
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
    background: linear-gradient(0.15turn, #232a3a, #d9cdc9, #73533e);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1.5);
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
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
  z-index: 100;

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
`;
