import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./navbar/navBar.jsx";
import Home from "./home/home.jsx";
import Projects from "./projects/projects.jsx";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer/footer.jsx";
function App() {
  return (
    <div className="soItBegins">
      <NavBar />
      <div style={{paddingTop: "210px", scrollSnapType: "y mandatory"}}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
