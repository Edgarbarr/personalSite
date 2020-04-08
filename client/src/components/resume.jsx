import React from "react";
import {Link} from "react-router-dom";

function Resume(){
    return (
        <div className="container-fluid blk">
            <div className="row">
                <div className="col-12 justify-content-end">
                    <Link to="resume.pdf" target="_blank" download>Download Resume</Link>
                </div>
                <div className="">
                    <img className="resumeImage center"src="resume.jpg"/>
                </div>
                
            </div>
        </div>
    )
}

export default Resume;