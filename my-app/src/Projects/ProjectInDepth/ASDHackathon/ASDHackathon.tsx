import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import HackathonSite from "./ASDHackathonSite.png";
import "../ProjectPages.css";

const ASDHackathon = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Autism Spectrum Disorder Chatbot"} htmlID={"ASDChatbot"}/>
                <div className={"ProjectFigure"}>
                    <img src={HackathonSite} alt={"Picture of the Hackathon site"}/>
                    <p> <b>Figure:</b> A picture of the hackathon webservice.</p>
                </div>


            </div>
        </div>
    );
}

export default ASDHackathon