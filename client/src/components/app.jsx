import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navBar.jsx";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
