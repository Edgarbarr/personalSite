import React, {useState} from "react";
import {Link} from "react-router-dom";


function NavBar(){
    var open = false;
    const collapseHandler = () => {
        if(open === false){
            document.getElementById("nav").className += "collapse-open"
            open = true;
        } 
        
    }
    return (
        <nav id="nav" className="navbar navbar-expand-sm navbar-light nav-bar animation-open">
            <img className="logo fadein" src="/logo.png" alt="EB Logo"/><h4 className="fadein">Software Engineer</h4>
            <div className="fadein collapse navbar-collapse" id="collapseDiv">
                <ul className="navbar-nav mr-auto justify-align">
                    <Link to="/"><li className="navbar-brand margin-none">Home</li></Link>
                    <Link to="/projects"><li className="navbar-brand margin-none">Projects</li></Link>
                    <Link to="/contact"><li className="navbar-brand margin-none">Contact</li></Link>
                    <Link to="/resume"><li className="navbar-brand margin-none">Resume</li></Link>
                </ul>
            </div>
            <button onClick={collapseHandler}className="navbar-toggler fadein" type="button" data-toggle="collapse" data-target="#collapseDiv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
export default NavBar;