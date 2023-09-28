import Header from "./components/header";
import Card from "./components/card";
import Page from "./components/Page";
import MeImage from "./assets/me.jpg";
import MainDiv from "./components/MainDiv";
import Logo from "./components/logo";
import Title from "./components/Title";
import ProjectWindow from "./components/ProjectWindow";
import "./css/MainPage.css";
import "./css/ProjectPage.css";
import "./css/AboutMePage.css";
import "./css/ContactsPage.css";

import GithubLogo from "./assets/github-logo.png";
import LinkedInLogo from "./assets/linkedin-logo.webp";
import { useState } from "react";
import ProjectButton from "./components/ProjectButton";
import { Display, LEFT } from "phaser";
import Circle from "./components/Circle";
import { Grid } from "matter";

function WebPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimatedVar, setAnimatedVar] = useState(false);
  const [isButtonActiveArray, setButtonActive] = useState([false, false, false]);

  return (
    <>
      <Header></Header>
      <Page>
        <div id="homePage">
          <MainDiv>
            <>
              <div className="image-border-div">
                <img src={MeImage} className="me-image"></img>
                <Circle scale={"1.1"} strokeDash={30} animationClass={"svg-circle-opposite"}></Circle>
                <Circle scale={"1.2"} strokeDash={20} animationClass={"svg-circle"}></Circle>
                <Circle scale={"1.3"} strokeDash={22} animationClass={"svg-circle-opposite"}></Circle>
                <Circle scale={"1.4"} strokeDash={15} animationClass={"svg-circle"}></Circle>
              </div>
              <div className="goal-logo-div">
                <div className="goal-name-div">
                  <p className="name">Brian Julius Kiss</p>
                  <p className="goal-text">
                    Computer Science Graduate, seeking entry-level opportunities in software development
                  </p>
                </div>
                <div className="logo-div">
                  <Logo
                    logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
                    logoClass="logo-small"
                    logoImage={LinkedInLogo}
                  ></Logo>
                  <Logo logoLink="https://github.com/kjbrian9" logoClass="logo-small" logoImage={GithubLogo}></Logo>
                </div>
              </div>
            </>
          </MainDiv>
        </div>
      </Page>
      <Page>
        <div id="aboutMePage">
          <div className="about-me">
            <Title textColor="black" fontSize="3rem">
              About me
            </Title>
          </div>
          <div className="about-me-div">
            <div>
              <Card>
                <Title textColor="rgb(71, 17, 70)" fontSize="1.3rem">
                  CAREER OBJECTIVE
                </Title>
                <p className="info-text">
                  Computer Science Graduate, Seeking Entry-Level Opportunities in Software Development
                </p>
              </Card>
              <Card>
                <Title textColor="rgb(164, 67, 67)" fontSize="1.3rem">
                  Brian Julius Kiss
                </Title>
                <p className="info-text">
                  brian.julius.k@gmail.com<br></br>Košice Slovakia<br></br> 11. September 2000
                </p>
              </Card>
              <Card>
                <Logo
                  logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
                  logoClass="logo-small"
                  logoImage={LinkedInLogo}
                ></Logo>
                <Logo logoLink="https://github.com/kjbrian9" logoClass="logo-small" logoImage={GithubLogo}></Logo>
              </Card>
            </div>
            <div>
              <Card>
                <Title textColor="rgb(71, 17, 70)" fontSize="1.2rem">
                  LANGUAGES
                </Title>
                <p className="info-text">English(C1), Slovak(native), Hungarian(native), Czech(B2)</p>
              </Card>
              <Card>
                <Title textColor="rgb(71, 17, 70)" fontSize="1.3rem">
                  Education
                </Title>
                <p className="info-text">
                  Bachelor of Computer Science<br></br> Technical University of Kosice
                </p>
              </Card>
              <Card>
                <Title textColor="rgb(166, 72, 95)" fontSize="1rem">
                  SKILLS
                </Title>
                <p className="info-text">
                  Intermediate: C#, JavaScript, HTML, CSS <br></br>Familiar: Java, Python, PostgreSQL
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Page>
      <Page>
        <div id="projectsPage">
          <div className="project-flex">
            <div className="project-div-height">
              <Card optClass="project-card">
                <ProjectWindow projectIndex={imageIndex} isAnimated={isAnimatedVar}></ProjectWindow>
              </Card>
            </div>

            <div id="project-buttons" className="button-div">
              <ProjectButton
                isActive={isButtonActiveArray[0]}
                onClickFunction={() => {
                  setButtonActive([true, false, false]);
                  setImageIndex(0);
                  setAnimatedVar(true);
                  setTimeout(() => {
                    setAnimatedVar(false);
                  }, 1000);
                }}
              >
                Bachelor project
              </ProjectButton>
              <ProjectButton
                isActive={isButtonActiveArray[1]}
                onClickFunction={() => {
                  setButtonActive([false, true, false]);
                  setImageIndex(1);
                  setAnimatedVar(true);
                  setTimeout(() => {
                    setAnimatedVar(false);
                  }, 1000);
                }}
              >
                Todo maker
              </ProjectButton>
              <ProjectButton
                isActive={isButtonActiveArray[2]}
                onClickFunction={() => {
                  setButtonActive([false, false, true]);
                  setImageIndex(2);
                  setAnimatedVar(true);
                  setTimeout(() => {
                    setAnimatedVar(false);
                  }, 1000);
                }}
              >
                YouTube main page
              </ProjectButton>
            </div>
          </div>
        </div>
      </Page>
      <Page>
        <div className="contacts-div" id="contactsPage">
          <div className="contacts-right-div">
            <div className="title-div">Contacts</div>
            <div>
              <Logo
                logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
                logoClass="logo-small"
                logoImage={LinkedInLogo}
              ></Logo>
              <Logo logoLink="https://github.com/kjbrian9" logoClass="logo-small" logoImage={GithubLogo}></Logo>
            </div>
            <p
              className="
              location"
            >
              Košice, Slovakia
            </p>
            <a href="mailto:brian.julius.k@gmail.com" className="email">
              brian.julius.k@gmail.com
            </a>
          </div>
          <div></div>
        </div>
      </Page>
    </>
  );
}

export default WebPage;
