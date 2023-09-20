import bachelor from "../assets/bachelorsProgram.png";
import TodoProject from "../assets/TodoProject.png";
import YoutubeProject from "../assets/Youtube.png";
import "../css/ProjectPage.css";
interface Props {
  isAnimated: boolean;
  projectIndex: number;
}

const images = [bachelor, TodoProject, YoutubeProject];
const titles = ["Bachelors project", "Todo List", "YouTube main page"];
const descriptions = [
  `My bachelors thesis program's goal was to get information about GitHub projects and evaluate 
the collected information. The goal of my thesis was to replicate a study about the effectivity
of visual issue reports on GitHub. To evaluate the effectivity of visual issue reports, I made a program in C#
which collected and evaluated information about Github projects. Firstly, my program searches GitHub repositories,
which correspond to the filters I defined. Then, it collects the issues, which also correspond to the filters I defined. 
My program evaluates the collected information and saves it and the evaluation results into CSV files.`,
  `In this project, I used HTML, CSS and JavaScript. This project can be used
to make simple todo lists. The user can set a name, description and a date for the task he wants to create.
`,
  `This project focused on replicating the YouTube main page.
  It was made only in HTML and CSS and its whole purpose is to replicate the design of the 
  YouTube main page. Inspect element was only used for finding the exact colors and it was never used
  to find layout parameters, such as margin or padding ratios.
`,
];

function ProjectWindow({ isAnimated, projectIndex }: Props) {
  return (
    // <div className={isAnimated === true ? "project-div-animation project-div" : "project-div"}>

    <div className={isAnimated === true ? "project-div-animation project-div" : "project-div"}>
      <p className="title">{titles[projectIndex]}</p>
      <img className="project-image" src={images[projectIndex]}></img>
      <p className="description">{descriptions[projectIndex]}</p>
    </div>
  );
}

export default ProjectWindow;
