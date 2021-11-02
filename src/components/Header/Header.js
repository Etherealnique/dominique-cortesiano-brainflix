import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header__container">
      <Link to="/">
        <img className="header__logo" alt="BrainFlix-logo" src={logo} />
      </Link>
      <div className="header__subsection">
        <input
          className="header__search-bar"
          type="text"
          placeholder="Search"
        ></input>
        <img className="header__avatar" alt="Mohan-muruge" src={avatar} />
      </div>
      <Link to="/uploadpage">
        <button className="header__button" type="submit">
          UPLOAD
        </button>
      </Link>
      <img className="header__avatar-tablet" alt="Mohan-muruge" src={avatar} />
    </div>
  );
}
