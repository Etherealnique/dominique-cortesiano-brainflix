import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/uploadpage" component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/* function App() {
  return (
    <>
      <nav />
      <Nav></Nav>
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={UploadPage} />
        </switch>
      </BrowserRouter>
    </>
  ); */
