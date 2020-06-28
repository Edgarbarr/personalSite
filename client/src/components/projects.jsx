import React, {useState} from "react";


function Projects(){
    var [projectsData, setProjectsData] = useState([
        {
            title: "Haven Of Happiness",
            tech: "React | HMTL5 | CSS3 | Firebase | Stripe",
            description: "An ecommerce app for handmade charms and keychains.",
            video: null 
        },
        {
            title: "Trafalgar Trip Detail Page Mockup",
            tech: "React | HMTL5 | CSS3 | MongoDB | Express",
            description: "An online webpage that details a trip of the clients choosing.",
            video: "Trafalgar.mp4"
        },
        {
            title: "Trivia Game",
            tech: "React | PostgreSQL | Express | Javascript | Socket.io",
            description: "Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice.",
            video: "trivia.mp4"
        },
        {
            title: "REI System Design",
            tech: "PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker",
            description: "Scaled and deployed a back end for an outdoor clothing app store.",
            video: "systemdesign.mp4"
        }
    ])

    var projectTemplate = <div className="container-fluid">
        {projectsData.map((projectData, index) => {
        var {title, tech, description, video} = projectData;
        return (index % 2 === 1) ? 
        <div className="row wte padding-50">
                 <video className="fadein col-12 col-md-8" width="820" autoPlay loop muted playsInline>
                     <source src={video} type="video/mp4"/>
                     Your browser does not support the video tag.
                 </video>
                 <div className="col-sm-8 col-md-4 margin-auto fadein justify-align">
                     <h2>{title}</h2>
                     <p>{tech}</p>
                     <p>{description}</p>
                 </div>
             </div> 
             :
             <div className="row blk padding-50">
                 {(title === "Haven Of Happiness") ?
                 <img className="fadein col-12 col-md-8" src="hoh.png"/>

                 :
                 <video className="fadein col-12 col-md-8" width="820" autoPlay loop muted playsInline>
                     <source src={video} type="video/mp4"/>
                     Your browser does not support the video tag.
                 </video>
                 }
                 <div className="col-sm-8 col-md-4 font-white margin-auto fadein justify-align">
                     {(title === "Haven Of Happiness") ? 
                     [<h2>{title}</h2>,
                     <p>An ecommerce app for handmade charms and keychains.</p>,
                     <p>WORK IN PROGRESS!</p>,
                     <p className="font-white">VISIT HERE: <a href="http://ec2-54-176-234-58.us-west-1.compute.amazonaws.com:5000" target="_blank">Haven Of Happiness</a></p>]
                     :
                     [<h2>{title}</h2>,
                     <p>{tech}</p>,
                     <p>{description}</p>]}
                 </div>
             </div>  
    })}
    </div>
    return projectTemplate

    
    // return (
        
    
            

        // <div className="container-fluid">
        //     <div className="row blk padding-50">
        //         <img className="fadein col-12 col-md-8" src="hoh.png"/>
        //         <div className="col-sm-8 col-md-4 margin-auto font-white fadein">
        //             <h2>Haven Of Happiness</h2>
        //             <p>React | HMTL5 | CSS3 | Firebase | Stripe</p>
        //             <p>An ecommerce app for handmade charms and keychains.</p>
        //             <p>WORK IN PROGRESS!</p>
        //             <p className="font-white">VISIT HERE: <a href="https://haven-of-happiness.herokuapp.com/" target="_blank">Haven Of Happiness</a></p>
        //         </div>
        //     </div>
        //     <div className="row wte padding-50">
        //         <video className="fadein col-12 col-md-8" width="820"  autoPlay loop muted>
        //             <source src="Trafalgar.mp4" type="video/mp4"/>
        //             Your browser does not support the video tag.
        //         </video>
        //         <div className="col-sm-8 col-md-4 margin-auto fadein">
        //             <h2>Trafalgar Trip Detail Page Mockup</h2>
        //             <p>React | HMTL5 | CSS3 | MongoDB | Express</p>
        //             <p>An online webpage that details a trip of the clients choosing.</p>
        //         </div>
        //     </div>
        //     <div className="row blk padding-50">
        //         <video className="fadein col-12 col-md-8" width="820" autoPlay loop muted>
        //             <source src="trivia.mp4" type="video/mp4"/>
        //             Your browser does not support the video tag.
        //         </video>
        //         <div className="col-sm-4 col-md-4 font-white margin-auto fadein">
        //             <h2>Trivia Game</h2>
        //             <p> React | PostgreSQL | Express | Javascript | Socket.io</p>
        //             <p>Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice.</p>
        //         </div>
        //     </div>
        //     <div className="row wte padding-50">
        //         <video className="fadein col-12 col-md-8" width="820" autoPlay loop muted>
        //             <source src="systemdesign.mp4" type="video/mp4"/>
        //             Your browser does not support the video tag.
        //         </video>
        //         <div className="col-sm-4 col-md-4 margin-auto fadein">
        //             <h2>REI System Design</h2>
        //             <p>PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker</p>
        //             <p>Scaled and deployed a back end for an outdoor clothing app store.</p>
        //         </div>
        //     </div>
        // </div>
    // )
}

export default Projects;