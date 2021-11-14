import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/uploadpage"
              render={(props) => {
                return <UploadPage {...props} />;
              }}
            />
            <Route path="/videos/:id" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
