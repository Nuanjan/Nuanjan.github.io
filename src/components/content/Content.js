import React from "react";
import { ContentWrapper } from "./contentStyles";

const Content = (props) => {
  return <ContentWrapper>{props.children}</ContentWrapper>;
};

export default Content;
