import React from "react";
import {Link} from "react-router-dom";

function Resume(){
    return (
        <div>
            <div className="container-fluid blk desktop-resume">
                <div className="row ">
                    <div className="col-12">
                        <a href="resume.pdf" download>Download Resume</a>
                    </div>
                    <div className="col-12 center-align">
                        <img className="center"src="resume.jpg"/>
                    </div>
                </div>
            </div>
            <embed className="mobile-resume"
    src="resume.pdf"
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
></embed>
        </div>
    )
}

export default Resume;