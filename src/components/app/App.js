import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Font } from "../../fonts/Font";
import Content from "../content/Content";
import Home from "./../home/Home";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import { AppContainer } from "./appStyles";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppContainer>
      <Router>
        <Font />
        <Navbar open={open} setOpen={setOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
