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
import 'lazysizes';





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
  threshold: .1
}
async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
  observer = new IntersectionObserver(callback, options);
  const elements = [...document.querySelectorAll('.crip div'), ...document.querySelectorAll(".qfi")];
  console.log(elements, "elements")
    elements.forEach((element) => {observer.observe(element)});
}

var observer;
 



function Home() {
  useEffect(()=>{
    loadPolyfills();
    console.log("hello")
    
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
          <div className="laptop-pic">
            <picture>
              <source data-srcset="/assets/images/laptop.webp" type="image/webp"/>
              <img className="lazyload qfi" data-src="./assets/images/laptop.jpg" alt="laptop and workspace"/>
            </picture>
          </div>
        </Aside>
      </HomeContainer>
      <ImageContainer className="background-element">
        <h1 className="base-element">From United States Soldier</h1>
      </ImageContainer>
      <HomeContainer>
        <Aside>
          <h1 className="aside-title">My Story:</h1>
        </Aside>
        <Main className="tech">
          <div className="quote">
            <span className="qfi">I joined the military back in 2013.</span>
          </div>
        </Main>
      </HomeContainer>
      <HomeContainer className="reverse">
        <Main className="tech">
          <div className="quote ">
            <span className="qfi">
              In the army, I was an electronics technician and in charge of the
              arms room.
            </span>
          </div>
        </Main>
        <Aside className="crip">
          <div className="armspic">
            <div>
            <picture>
              <source data-srcset="./assets/images/armspic.webp" type="image/webp"/>
              <img className="lazyload" data-src="./assets/images/armspic.jpg" alt="Myself working in a weapon"/>
            </picture>
            </div>
          </div>
        </Aside>
      </HomeContainer>
      <HomeContainer>
        <Main className="quote-container">
          <div className="quote">
            <span className="qfi">
              While deployed, I read a book about coding and promised myself I
              would learn to code.
            </span>
          </div>
        </Main>
      </HomeContainer>
      <HomeContainer>
        <Main>
          <div className="quote">
            <span className="qfi">
              I gained valuable leadership skills and built a strong work ethic.
            </span>
          </div>
        </Main>
        <Aside className="crip">
        <div className="picberet">
        <picture>
              <source data-srcset="./assets/images/soldierpic.webp" type="image/webp"/>
              <img className="lazyload" data-src="./assets/images/soldierpic.jpg" alt="portrait picture of myself in airborne uniform"/>
            </picture>
        </div>
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
            <span className="qfi">
              After my enlistment, I went to Galvanize Software Immersive. But
              the learning didn't stop there...
            </span>
          </div>
        </Main>
      </HomeContainer>
      <ImageContainer2 className="background-element">
        <div className="fullstackdiv">
          <h1 className="base-element">To Full Stack Developer</h1>
        </div>
      </ImageContainer2>
      <HomeContainer>
        <Main className="quote-container">
          <div className="quote">
            <span className="qfi">
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
                <source data-srcset="./assets/images/javascript.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/javascript.png" alt="javascript logo"/>
              </picture>
              
              <picture>
                <source data-srcset="./assets/images/css.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/css.png"alt="css logo"/>
              </picture>
              
              <picture>
                <source data-srcset="./assets/images/html.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/html.png"alt="html logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/bootstrap.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/bootstrap.png" alt="bootstrap logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/react.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/react.png" alt="react logo"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Back End Development</h3>
            </SkillTitle>
            <SkillGrid>
            <picture>
                <source data-srcset="./assets/images/node.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/node.png" alt="node logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/express.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/express.png" alt="express logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/npm.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/npm.png" alt="npm logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/mongo.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/mongo.jpg" alt="mongodb logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/postgres.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/postgres.png" alt="postgresql logo"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Testing & Dev Ops</h3>
            </SkillTitle>
            <SkillGrid>
            <picture>
                <source data-srcset="./assets/images/aws.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/aws.png" alt="aws logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/heroku.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/heroku.png" alt="heroku logo"/>
              </picture>
              <picture>
                <img className="lazyload qfi" data-src="./assets/images/Nginx.svg" alt="nginx logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/jest.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/jest.jpg" alt="jest logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/docker.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/docker.png"alt="docker logo"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
          <SkillCategory>
            <SkillTitle>
              <h3>Developer Tools & More</h3>
            </SkillTitle>
            <SkillGrid className="three">
            <picture>
                <source data-srcset="./assets/images/git.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/git.png" alt="git logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/webpack.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/webpack.png" alt="webpack logo"/>
              </picture>
              <picture>
                <source data-srcset="./assets/images/linux.webp" type="image/webp"/>
                <img className="lazyload qfi" data-src="./assets/images/linux.jpg" alt="linux logo"/>
              </picture>
            </SkillGrid>
          </SkillCategory>
        </SkillsSection>
      </HomeContainer>
    </div>
  );
}
export default Home;
