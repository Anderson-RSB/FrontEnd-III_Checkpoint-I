import React from "react";
import Principal from "./principal/Principal";
import About from "./about/About";
import Contact from "./contact/Contact";

function Content() {
  return (
    <div className="l-content">
      <Principal />
      <About />
      <Contact />
    </div>
  );
}

export default Content;