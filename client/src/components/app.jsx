import React, {useEffect, useState} from "react";
import { Switch, Route, useParams } from "react-router-dom";
// import NavBar from "./navbar/navBar.jsx";
import Spinner from "./with-spinner/with-spinner.component.jsx";
// import Home from "./home/home.jsx";
// import Projects from "./projects/projects.jsx";
// import Resume from "./resume.jsx";
// import Contact from "./contact.jsx";
// import Footer from "./footer/footer.jsx";
import loadable from '@loadable/component'

// import {useSelector} from "react-redux";
const NavBar = loadable(() => import("./navbar/navBar.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});
const Projects = loadable(() => import("./projects/projects.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});
const Resume = loadable(() => import("./resume.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});
const Contact = loadable(() => import("./contact.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});
const Home = loadable(() => import("./home/home.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});
const Footer = loadable(() => import("./footer/footer.jsx"), {
  fallback: <Spinner/>,
  ssr: true

});



function App() {
  // const user = useSelector(state=> state);
  // console.log(user);

  return (
    <div className="soItBegins">
      <NavBar />
      <div style={{paddingTop: "210px"}}>
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
