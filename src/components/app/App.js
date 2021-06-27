import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Font } from "../../fonts/Font";
import Content from "../content/Content";
import Home from "./../home/Home";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import BackgroundImg from "./../content/BackgroundImg";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <div>
        <Font />
        <Navbar open={open} setOpen={setOpen} />
        <Content />
        <BackgroundImg />
        <Switch>
          <Route path="/" exat component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
