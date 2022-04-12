import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Biopage from "./Biopage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Biopage} />
            <Route path="/biopage" component={Biopage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
