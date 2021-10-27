import React from "react";
import logo from "../";

export default function Header() {
  return (
    <div>
      <h1>HEADER</h1>
      <a href="./index.html">
        <img alt="BrainFlix-logo" src={logo} className="header__logo" />
        <figure>search bar</figure>
        <image>avatar</image>
        <figure>Upload button</figure>
      </a>
    </div>
  );
}
