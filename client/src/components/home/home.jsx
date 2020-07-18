import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  Main,
  Aside,
  ImageContainer,
  ImageContainer2,
  SkillCategory,
  SkillTitle,
  SkillsSection,
  SkillGrid,
} from "./home.styled.jsx";
import scrollToTop from "../scrollToTop.jsx";


let callback = (entries) => { 
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
      }
  });
}
let options = {
  root: null,
  rootMargin: '0px',
  threshold: .5
}
let observer = new IntersectionObserver(callback, options);



function Home() {
  useEffect(()=>{
    const elements = [...document.querySelectorAll('.crip div')];
    
    elements.forEach((element) => {observer.observe(element)});

  }, [])
  scrollToTop();
  return (
    <div>
      <HomeContainer>
        <Main className="about">
          <h1 className="about-header">Develop your dreams</h1>
          <div>
            <h2>Bring your vision to life.</h2>
            <p>
              I’m a full stack developer based in Los Angeles, CA and I can
              provide you with beautiful, responsive web sites and applications
              to help bring more traffic and views to your business. Click the
              button below to contact me or keep scrolling to learn more.
            </p>
          </div>
          <Link to="/contact">
            <button className="button">Contact</button>
          </Link>
        </Main>
        <Aside className="about">
          <div></div>
        </Aside>
      </HomeContainer>
      <ImageContainer>
        <h1>From United States Soldier</h1>
      </ImageContainer>
      <HomeContainer>
        <Aside>
          <h1 className="aside-title">My Story:</h1>
        </Aside>
        <Main className="tech">
          <div className="quote">
            <span>I joined the military back in 2013.</span>
          </div>
        </Main>
      </HomeContainer>
      <HomeContainer className="reverse">
        <Main className="tech">
          <div className="quote ">
            <span>
              In the army, I was an electronics technician and in charge of the
              arms room.
            </span>
          </div>
        </Main>
        <Aside className="crip">
          <div className="armspic"></div>
        </Aside>
      </HomeContainer>
      <HomeContainer>
        <Main className="quote-container">
          <div className="quote">
            <span>
              While deployed, I read a book about coding and promised myself I
              would learn to code.
            </span>
          </div>
        </Main>
      </HomeContainer>
      <HomeContainer>
        <Main>
          <div className="quote">
            <span>
              I gained valuable leadership skills and built a strong work ethic.
            </span>
          </div>
        </Main>
        <Aside className="crip">
        <div className="picberet"></div>
        </Aside>
      </HomeContainer>
      <HomeContainer className="reverse">
        <Aside className="project">
          <h1 className="aside-title">Check out my projects page:</h1>
          <Link to="/projects">
            <button className="button">Projects</button>
          </Link>
        </Aside>
        <Main className="tech">
          <div className="quote">
            <span>
              After my enlistment, I went to Galvanize Software Immersive. But
              the learning didn't stop there...
            </span>
          </div>
        </Main>
      </HomeContainer>
      <ImageContainer2>
        <h1>To Full Stack Developer</h1>
      </ImageContainer2>
      <HomeContainer>
        <Main className="quote-container">
          <div className="quote">
            <span>
              Now I have the skills to contribute to your company's bottom line.
            </span>
          </div>
        </Main>
      </HomeContainer>
      <HomeContainer>
        <SkillsSection>
          <SkillCategory>
            <SkillTitle>
              <h3>Front End Development</h3>
            </SkillTitle>
            <SkillGrid>
              <picture>
                <source srcset="./images/javascript.webp" type="image/webp"/>
                <img src="./images/javascript.png"/>
              </picture>
              
              <picture>
                <source srcset="./images/css.webp" type="image/webp"/>
                <img src="./images/css.png"/>
              </picture>
              
              <picture>
                <source srcset="./images/html.webp" type="image/webp"/>
                <img src="./images/html.png"/>
              </picture>
              <picture>
                <source srcset="./images/bootstrap.webp" type="image/webp"/>
                <img src="./images/bootstrap.png"/>
              </picture>
              <picture>
                <source srcset="./images/react.webp" type="image/webp"/>
                <img src="./images/react.png"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Back End Development</h3>
            </SkillTitle>
            <SkillGrid>
            <picture>
                <source srcset="./images/node.webp" type="image/webp"/>
                <img src="./images/node.png"/>
              </picture>
              <picture>
                <source srcset="./images/express.webp" type="image/webp"/>
                <img src="./images/express.png"/>
              </picture>
              <picture>
                <source srcset="./images/npm.webp" type="image/webp"/>
                <img src="./images/npm.png"/>
              </picture>
              <picture>
                <source srcset="./images/mongo.webp" type="image/webp"/>
                <img src="./images/mongo.jpg"/>
              </picture>
              <picture>
                <source srcset="./images/postgres.webp" type="image/webp"/>
                <img src="./images/postgres.png"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Testing & Dev Ops</h3>
            </SkillTitle>
            <SkillGrid>
            <picture>
                <source srcset="./images/aws.webp" type="image/webp"/>
                <img src="./images/aws.png"/>
              </picture>
              <picture>
                <source srcset="./images/heroku.webp" type="image/webp"/>
                <img src="./images/heroku.png"/>
              </picture>
              <picture>
                <img src="./images/Nginx.svg"/>
              </picture>
              <picture>
                <source srcset="./images/jest.webp" type="image/webp"/>
                <img src="./images/jest.jpg"/>
              </picture>
              <picture>
                <source srcset="./images/docker.webp" type="image/webp"/>
                <img src="./images/docker.png"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Developer Tools & More</h3>
            </SkillTitle>
            <SkillGrid className="three">
            <picture>
                <source srcset="./images/git.webp" type="image/webp"/>
                <img src="./images/git.png"/>
              </picture>
              <picture>
                <source srcset="./images/webpack.webp" type="image/webp"/>
                <img src="./images/webpack.png"/>
              </picture>
              <picture>
                <source srcset="./images/linux.webp" type="image/webp"/>
                <img src="./images/linux.jpg"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
        </SkillsSection>
      </HomeContainer>
    </div>
  );
}
export default Home;
