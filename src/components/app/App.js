import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Font } from "../../fonts/Font";
import Home from "./../home/Home";
import Portfolio from "./../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import { AppContainer, ResumeBtn, ResumeBtnInside } from "./appStyles";
import { Link } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);
  const [slideDown, setSlideDown] = useState(false);
  const controlResumeBtn = () => {
    if (window.scrollY > 200) {
      setSlideDown(true);
    } else {
      setSlideDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlResumeBtn);
    return () => {
      window.removeEventListener("scroll", controlResumeBtn);
    };
  }, []);
  return (
    <AppContainer>
      <Router>
        <ResumeBtn slideDown={slideDown}>
          <Link
            to={{
              pathname:
                "https://drive.google.com/file/d/1OyPQ-j7_ZNfk0PrmNztGEYQa88IftmBy/view?usp=sharing",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ResumeBtnInside>
              <span>RESUME</span>
            </ResumeBtnInside>
          </Link>
        </ResumeBtn>
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
