import App from "../../App";
import ProjectsHeader from "../ProjectsHeader";
import "../Projects.css";
import React from "react";
import ProjectsList from "../ProjectsList";
import {useParams} from "react-router-dom";
import ASDHackathon from "./ASDHackathon";
import Projects from "../Projects";
import WebsitePortfolio from "./WebsitePortfolio";
import Wordle from "./Wordle";

const ProjectRoute = (props:any) => {
    const { project } = useParams();
    console.log(project)
    switch (project) {
        case "ASDHackathon" :
            return (
                <ASDHackathon/>
            )
        case "Wordle":
            return (
                <Wordle/>
            )
        case "WebsitePortfolio":
            return (
                <WebsitePortfolio/>
            )
        default :
            return (
                <Projects/>
            )
    }
}

export default ProjectRoute