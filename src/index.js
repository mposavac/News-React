import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/Home";

import { Route, HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import newsReducer from "./store/reducers/newsReducer";

const store = createStore(newsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path={"/:language?/:category?"} component={Home} />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
