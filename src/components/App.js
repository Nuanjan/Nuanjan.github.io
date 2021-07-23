import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import { Font } from "../globalStyles/Font";
import AboutMeSection from "./AboutMeSection";
import Projects from "./projects/Projects";
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
        <Projects />
        <ContactSection />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
