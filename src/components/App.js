import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import { Font } from "../globalStyles/Font";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

import { AppContainer, ContentContainer } from "./appStyles";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppContainer>
      <Font />
      <Navbar open={open} setOpen={setOpen} />
      <ContentContainer>
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
