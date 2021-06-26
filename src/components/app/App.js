import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Font } from "../../fonts/Font";
import { BackGroundImager } from "./appStyles";
import bgImage from "../../images/portfolio-bg.png";
import Content from "../content/Content";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Font />
      <Navbar
        open={open}
        setOpen={setOpen}
        style={{ position: "fixed", left: 0 }}
      />
      <Content />
      <BackGroundImager open={open} setOpen={setOpen}>
        <img src={bgImage} alt="me and my pugs" style={{ height: "auto" }} />
      </BackGroundImager>
    </div>
  );
};

export default App;
