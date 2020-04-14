import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./navBar.jsx";
import Contact from './contact.jsx';
import Resume from "./resume.jsx";
import Projects from "./projects.jsx";
import Home from "./home.jsx";
function App(){
    return(
        <Router>
                <NavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router> 
    )
}

export default App;