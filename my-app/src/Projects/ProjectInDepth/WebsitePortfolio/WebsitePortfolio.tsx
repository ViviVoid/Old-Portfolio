import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import figmaOverviewPicture from "./figma-overview.svg";

const WebsitePortfolio = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Website Portfolio"} htmlID={"WebsitePortfolio"}/>
                <div className={"ProjectFigure"}>
                    <img src={figmaOverviewPicture} alt={"Picture of the Website Portfolio Application"}/>
                    <p> <b>Figure:</b> A picture of the website portfolio wireframes made in Figma.</p>
                </div>
            </div>
        </div>
    );
}

export default WebsitePortfolio