import React from "react";
import Home from "./../home/Home";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import { AllContentContainer } from "./contentStyles";

const AllContent = () => {
  return (
    <AllContentContainer>
      <Home />
      <Portfolio />
      <Contact />
    </AllContentContainer>
  );
};

export default AllContent;
