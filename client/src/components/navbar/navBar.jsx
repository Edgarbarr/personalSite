import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Nav} from './navBar.styles.jsx';


function NavBar(){
    var open = false;
    if (typeof window === 'undefined') {
        global.window = {}
    }
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("nav").style.setProperty('height', '100px');
    document.getElementById("nav").style.setProperty('flex-direction', 'row', 'important');
    document.getElementById("nav").style.setProperty('padding', '0 10px');
    document.getElementById("logo").style.setProperty('height', '50px');
    document.getElementById("logo").style.setProperty('width', '50px');
    document.getElementById("nav-list").style.setProperty('top', '100px');

  } else {
    document.getElementById("nav").style.setProperty('height', '210px');
    document.getElementById("nav").style.setProperty('flex-direction', 'column');
    document.getElementById("nav").style.setProperty('padding', '0');
    document.getElementById("nav-list").style.setProperty('top', '210px');
    document.getElementById("logo").style.setProperty('height', '100px');
    document.getElementById("logo").style.setProperty('width', '100px');

  }

  
}
var collapseHandler = () => {
    
    if(!open){
        document.getElementById("nav-list").style.setProperty('width', '80%');
        open= true;
    }  else if(open){
        document.getElementById("nav-list").style.setProperty('width', '0%');
        open = false;
    }
  }
  const clickHandler = () => {
      if(window.innerWidth <= 768){
          open = false;
          document.getElementById("nav-list").style.setProperty('width', '0%');
      }
  }
      return (
        <Nav id="nav">
            <Link to="/"><img id="logo" className="logo" src="/assets/logo.png" alt="EB Logo"/></Link><h5 id="job-title">Full Stack Developer</h5>
            <div className="x">
                <ul id="nav-list" onClick={clickHandler}>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/resume"><li>Resume</li></Link>
                </ul>
            </div>
            <button onClick={collapseHandler} className="mobile-button fadein" >
                 <svg className="burger" viewBox="0 0 100 100" width="30" height="30">
                      <rect fill="grey" x="12.5" y="20" width="75" height="7" rx="3"></rect>
                      <rect fill="grey" x="12.5" y="50" width="75" height="7" rx="3"></rect>
                      <rect fill="grey" x="12.5" y="80" width="75" height="7" rx="3"></rect>
                </svg>
            </button>
        </Nav>
    )
}
export default NavBar;