import React from "react";
import { StyledBurger } from "./navbarStyles";

const NavbarBurger = ({ open, setOpen }) => {
  // const [show, setShow] = useState(true);

  // const controlBurger = () => {
  //   if (window.scrollY > 100) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlBurger);
  //   return () => {
  //     window.removeEventListener("scroll", controlBurger);
  //   };
  // }, []);
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default NavbarBurger;
