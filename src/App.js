import React, { Component, Suspense, lazy } from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/store";

import InfoList from "./components/info/InfoList";
import HomePage from "./components/routing/HomePage";

const Home = lazy(() => import("./components/routing/Home"));
const About = lazy(() => import("./components/routing/About"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
