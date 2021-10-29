import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";
// import DescriptionLikes from "./components/DescriptionLikes/DescriptionLikes";

export default class App extends Component {
  state = {
    heartImg: 110985,
  };

  handleButtonClick = (str) => {
    this.setState({ heartImg: this.state.heartImg + 1 }, () => {});
  };

  render() {
    return (
      <div className="App">
        <Home />
        <button
          onClick={() => {
            this.handleButtonClick("What a beautiful click you just made");
          }}
        ></button>
        {/* <Counter heartImg={this.state.heartImg} /> */}
      </div>
    );
  }
}
