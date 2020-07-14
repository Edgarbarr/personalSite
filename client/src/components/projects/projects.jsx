import React, { useState } from "react";
import scrollToTop from "../scrollToTop.jsx";
import {
  ProjectsContainer,
  Project,
  Description,
  DiagLayout,
  ContentContainer,
} from "./projects.styles.jsx";

function Projects() {
  scrollToTop();

  window.onresize = function () {
    padder();
  };
  function padder() {
    document.querySelectorAll(".inner-shit").forEach((div, index) => {
      div.style.setProperty("padding", `${window.innerWidth * 0.09719}px 0`);
      if (index === 0) {
        div.style.setProperty("padding-top", `0`);
      }
      if (index === 3) {
        div.style.setProperty("padding-bottom", `0`);
      }
    });
  }

  var [projectsData, setProjectsData] = useState([
    {
      title: "Haven Of Happiness",
      tech: "React | HMTL5 | CSS3 | Firebase | Stripe",
      description: "An ecommerce app for handmade charms and keychains.",
      video: null,
    },
    {
      title: "Trafalgar Trip Detail Page Mockup",
      tech: "React | HMTL5 | CSS3 | MongoDB | Express",
      description:
        "An online webpage that details a trip of the clients choosing.",
      video: "Trafalgar.mp4",
    },
    {
      title: "Trivia Game",
      tech: "React | PostgreSQL | Express | Javascript | Socket.io",
      description:
        "Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice.",
      video: "trivia.mp4",
    },
    {
      title: "REI System Design",
      tech: "PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker",
      description:
        "Scaled and deployed a back end for an outdoor clothing app store.",
      video: "systemdesign.mp4",
    },
  ]);
  return (
    <ProjectsContainer>
      <Project style={{ backgroundColor: "#484848", color: "white" }}>
        <DiagLayout>
          <ContentContainer>
            <img
              className="media hohimage"
              src="hoh.png"
              alt="Haven of Happiness frontpage snapshot"
            />
            <Description>
              <h2>Haven Of Happiness</h2>
              <p>React | HMTL5 | CSS3 | Firebase | Stripe</p>
              <p>An ecommerce app for handmade charms and keychains.</p>
              <p>WORK IN PROGRESS!</p>
              <p className="font-white">
                VISIT HERE:{" "}
                <a
                  href="http://ec2-54-176-234-58.us-west-1.compute.amazonaws.com:5000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Haven Of Happiness
                </a>
              </p>
            </Description>
          </ContentContainer>
        </DiagLayout>
      </Project>
      <Project style={{ backgroundColor: "#e6e6e6" }}>
        <DiagLayout>
          <ContentContainer>
            <video
              className="media"
              width="820"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="Trafalgar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Description>
              <h2>Trafalgar Trip Detail Page Mockup</h2>
              <p>React | HMTL5 | CSS3 | MongoDB | Express</p>
              <p>
                An online webpage that details a trip of the clients choosing.
              </p>
            </Description>
          </ContentContainer>
        </DiagLayout>
      </Project>
      <Project style={{ backgroundColor: "#484848", color: "white" }}>
        <DiagLayout>
          <ContentContainer>
            <video
              className="media"
              width="820"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="trivia.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Description>
              <h2>Trivia Game</h2>
              <p>React | PostgreSQL | Express | Javascript | Socket.io</p>
              <p>
                Trivia Game is an app that utilizes websockets get a real time
                response between users in a chat room. The users can participate
                in a trivia game with a theme of their choice.
              </p>
            </Description>
          </ContentContainer>
        </DiagLayout>
      </Project>
      <Project style={{ backgroundColor: "#e6e6e6" }}>
        <DiagLayout>
          <ContentContainer>
            <video
              className="media"
              width="820"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="systemdesign.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Description>
              <h2>REI System Design</h2>
              <p>PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker</p>
              <p>
                Scaled and deployed a back end for an outdoor clothing app
                store.
              </p>
            </Description>
          </ContentContainer>
        </DiagLayout>
      </Project>
    </ProjectsContainer>
  );
}

export default Projects;
