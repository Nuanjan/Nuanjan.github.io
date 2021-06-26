import React from 'react';
import {StyledBurger} from './navbarStyles'

const NavbarBurger = ({open, setOpen}) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    );
};

export default NavbarBurger;