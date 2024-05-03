import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import WordleAppPicture from "./WordleApp.png";

const Wordle = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Wordle"} htmlID={"Wordle"}/>
                <div className={"ProjectFigure"}>
                    <img src={WordleAppPicture} alt={"Picture of the Wordle Application"}/>
                    <p> <b>Figure:</b> A picture of the Wordle application.</p>
                </div>
            </div>
        </div>
    );
}

export default Wordle