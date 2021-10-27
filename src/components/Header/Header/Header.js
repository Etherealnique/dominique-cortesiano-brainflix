import React from "react";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <a href="./index.html">
        <img alt="BrainFlix-logo" src="../" className="header__logo" />
        <figure>search bar</figure>
        <image>avatar</image>
        <figure>Upload button</figure>
      </a>
    </div>
  );
}
