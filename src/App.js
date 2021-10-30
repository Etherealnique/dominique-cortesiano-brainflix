import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";
// import DescriptionLikes from "./components/DescriptionLikes/DescriptionLikes";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
