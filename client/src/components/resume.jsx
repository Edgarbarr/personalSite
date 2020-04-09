import React from "react";
import {Link} from "react-router-dom";

function Resume(){
    return (
        <div className="container-fluid blk">
            <div className="row">
                <div className="col-12">
                    <a href="resume.pdf" download>Download Resume</a>
                </div>
                <div className="col-12 center-align">
                    <img className="center"src="resume.jpg"/>
                </div>
                
            </div>
        </div>
    )
}

export default Resume;