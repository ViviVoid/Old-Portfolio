import React from 'react';
import "../styles/browser.css"
import daoLogo from "../DaoLogo.png"
import ProjectCard from "./ProjectCard";

import MAICLogo from "./MAIC_Logo.png";
import {Link} from "react-router-dom";

const ProjectsList: React.FC = () => (
    <div id={"ProjectsList"}>
        <ProjectCard projectTitle={"Autism Spectrum Disorder Chatbot"}
                     projectDescription={"I developed a static frontend with html/css and backend Node server and " +
                         "utilized Fetch requests to utilize super computing power of ROSIE. This was done for " +
                         "a hackathon in collaboration with other students that handled tuning the chatbot."}
                     projectImage={MAICLogo}
                     projectImageAlt={"Image of MSOE AI Club"}
                     projectLink={"/Projects/ASDHackathon"}
        />
        <ProjectCard projectTitle={"Wordle Project"} projectDescription={"I worked in a software development team " +
            "that utilized scrum and agile techniques to develop a wordle game in java."}
                     projectImage={daoLogo}
                     projectImageAlt={"Dao Logo"}
                     projectLink={"/Projects/Wordle"}
        />
        <ProjectCard projectTitle={"Website Portfolio"}
                     projectDescription={"Developed a website portfolio using static React and implementing User Experience " +
                         "principles."}
                     projectImage={daoLogo}
                     projectImageAlt={"Dao Logo"}
                     projectLink={"/Projects/WebsitePortfolio"}
        />
    </div>

    // <App />
);

export default ProjectsList