import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { Route, HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Route path={"/:language?/:category?"} component={Home} />
  </HashRouter>,
  document.getElementById("root")
);
