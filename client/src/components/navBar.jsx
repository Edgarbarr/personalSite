import React, {useState} from "react";
import {Link} from "react-router-dom";


function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bar animation-open">
            <img className="logo fadein" src="/logo.png"/><h4 className="fadein">Full Stack Engineer</h4>
            <ul className="fadein">
                <Link to="/"><li className="navbar-brand slide-down">Home</li></Link>
                <Link to="/projects"><li className="navbar-brand">Projects</li></Link>
                <Link to="/contact"><li className="navbar-brand">Contact</li></Link>
                <Link to="/resume"><li className="navbar-brand">Resume</li></Link>
            </ul>
        </nav>
    )
}
export default NavBar;