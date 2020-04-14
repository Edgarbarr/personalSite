import React from "react";

function Projects(){
    return (
        <div className="container-fluid">
            <div className="row blk padding-50">
                <video poster="loading.gif" className="fadein col-12 col-md-8" width="820"  autoPlay loop muted>
                    <source src="Trafalgar.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="col-sm-8 col-md-4 margin-auto font-white fadein">
                    <h2>Trafalgar Trip Detail Page Mockup</h2>
                    <p>React | HMTL5 | CSS3 | MongoDB | Express</p>
                    <p>An online webpage that details a trip of the clients choosing.</p>
                </div>
            </div>
            <div className="row wte padding-50">
                <video poster="loading.gif" className="fadein col-12 col-md-8" width="820" autoPlay loop muted>
                    <source src="systemdesign.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="col-sm-4 col-md-4 margin-auto fadein">
                    <h2>REI System Design</h2>
                    <p>PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker</p>
                    <p>Scaled and deployed a back end for an outdoor clothing app store.</p>
                </div>
            </div>
            <div className="row blk padding-50">
                <video poster="loading.gif" className="fadein col-12 col-md-8" width="820" autoPlay loop muted>
                    <source src="trivia.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="col-sm-4 col-md-4 font-white margin-auto fadein">
                    <h2>Trivia Game</h2>
                    <p> React | PostgreSQL | Express | Javascript | Socket.io</p>
                    <p>Trivia Game is an app that utilizes websockets get a real time reponse between users in a chat room. The users can participate in a trivia game with a theme of their choice.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;