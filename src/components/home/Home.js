import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import Projects from "./../project/Projects";
import Contact from "../contact/Contact";

import { HomeContainer } from "./homeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <AboutMe />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
