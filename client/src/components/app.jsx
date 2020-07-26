import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./navbar/navBar.jsx";
import Spinner from "./with-spinner/with-spinner.component.jsx";
// import Home from "./home/home.jsx";
// import Projects from "./projects/projects.jsx";
// import Resume from "./resume.jsx";
// import Contact from "./contact.jsx";
// import Footer from "./footer/footer.jsx";
import loadable from '@loadable/component'
// import {useSelector} from "react-redux";

const Projects = loadable(() => import("./projects/projects.jsx"), {
  fallback: <Spinner/>
});
const Resume = loadable(() => import("./resume.jsx"), {
  fallback: <Spinner/>
});
const Contact = loadable(() => import("./contact.jsx"), {
  fallback: <Spinner/>
});
const Home = loadable(() => import("./home/home.jsx"), {
  fallback: <Spinner/>
});
const Footer = loadable(() => import("./footer/footer.jsx"), {
  fallback: <Spinner/>
});



function App() {
  var [loading, setLoading] = useState(false);
  // const user = useSelector(state=> state);
  // console.log(user);

  useEffect(() => {
  },[Projects, Resume, Contact, Home])
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
