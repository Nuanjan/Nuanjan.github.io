import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Font } from "../../globalStyles/Font";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import { AppContainer } from "./appStyles";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppContainer>
      <Font />
      <Router>
        <Navbar open={open} setOpen={setOpen} />
        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
