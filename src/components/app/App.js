import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Font } from "../../globalStyles/Font";
import Home from "../home/Home";
import Projects from "./../project/Projects";
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
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
