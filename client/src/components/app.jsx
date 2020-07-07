import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./navBar.jsx";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";
import "./style.css";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
