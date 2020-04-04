import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/index.css";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

ReactDOM.render(<App />, document.getElementById("root"));
