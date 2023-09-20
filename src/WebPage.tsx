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

import GithubLogo from "./assets/github-logo.png";
import LinkedInLogo from "./assets/linkedin-logo.webp";
import { useState } from "react";
import ProjectButton from "./components/ProjectButton";

function WebPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimatedVar, setAnimatedVar] = useState(false);
  const [isButtonActiveArray, setButtonActive] = useState([false, false, false]);

  return (
    <>
      <Header></Header>
      <Page>
        <div id="homePage">
          <>
            <MainDiv>
              <>
                <img src={MeImage} className="me-image"></img>
                <div className="goal-logo-div">
                  <div className="goal-name-div">
                    <p className="name">Brian Julius Kiss</p>
                    <p className="goal-text">
                      Computer Science Graduate, seeking entry-level opportunities in software development
                    </p>
                  </div>
                  <div className="logo-div">
                    <Logo logoClass="logo-small" logoImage={LinkedInLogo}></Logo>
                    <Logo logoClass="logo-small" logoImage={GithubLogo}></Logo>
                  </div>
                </div>
              </>
            </MainDiv>
          </>
        </div>
      </Page>
      <Page>
        <div id="aboutMePage" className="about-me-div">
          <div>
            <Card>
              <Title textColor="rgb(71, 17, 70)" fontSize="1.3rem">
                CAREER OBJECTIVE
              </Title>
              <p>Computer Science Graduate, Seeking Entry-Level Opportunities in Software Development</p>
            </Card>
            <Card>
              <Title textColor="rgb(164, 67, 67)" fontSize="1.3rem">
                Brian Julius Kiss
              </Title>
              <p>Computer Science Graduate, Seeking Entry-Level Opportunities in Software Development</p>
            </Card>
            <Card>
              <Logo logoClass="logo-small" logoImage={LinkedInLogo}></Logo>
              <Logo logoClass="logo-small" logoImage={GithubLogo}></Logo>
            </Card>
          </div>
          <div>
            <Card>
              <Title textColor="rgb(71, 17, 70)" fontSize="1.3rem">
                About me
              </Title>
              <p>Computer Science Graduate, Seeking Entry-Level Opportunities in Software Development</p>
            </Card>
            <Card>
              <Title textColor="rgb(166, 72, 95)" fontSize="1rem">
                SKILLS
              </Title>
              <p>Computer Science Graduate, Seeking Entry-Level Opportunities in Software Development</p>
            </Card>
          </div>
        </div>
      </Page>
      <Page>
        <div id="projectsPage" className="project-page">
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
      </Page>
    </>
  );
}

export default WebPage;
