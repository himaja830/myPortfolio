import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About ";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter basename="/myPortfolio">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
