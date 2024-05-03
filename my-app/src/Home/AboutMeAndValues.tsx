import React from 'react';
import "../styles/browser.css"
import "./Home.css"
import profPhoto from "./profSmaller.jpg"

const AboutMeAndValues:React.FC = () => (
    <>
    <h1 className={"Header"}>Personal Statements</h1>
    <div id={"AboutMe"}>
        <div id={"GrowthMindset"}>
            <h1 className={"HomeBackgroundImage"}>
                Growth Mindset
            </h1>
            <p>
                Life-long learning is something I live by throughout my academic career. I take active steps to be involved and learn more about my environment, surroundings, and other perspectives. These active steps include immersing myself in other cultures and leadership discussion which puts my outside of my comfort zone. Through organizations like Servant-Leader Roundtable, MSOE AI Club talks, and participating in symposiums and talks, I expand my breadth of knowledge and soft skills.
            </p>

            <p>
                A growth mindset to me is more than adding other skills and tools to my toolbox but includes expanding my perspective and approach.
            </p>
        </div>

        <div id={"Drive"}>
            <h1 className={"HomeBackgroundImage"}>
                Drive
            </h1>

            <p>
                Establishing goals and progress is what comprises my drive to develop software and engage with the development process. Similar to inspiration, I find drive through engaging with recent trends through youtube videos, local tech talks, and engaging in discourse with new individuals. In tandem, I develop goals that intertwine my enjoyment in the process and eventual end goal.
            </p>

            <p>
                Drive to me is cultivated by finding the spark of innovation to start the software development process and then creating smart actionable goals to follow through on an end goal and develop myself.
            </p>

        </div>

        <div id={"Adaptability"}>
            <h1 className={"HomeBackgroundImage"}>
                Adaptability
            </h1>

            <p>
                
            </p>

        </div>

        <img src={profPhoto} alt={"Professional Photo of Andy Dao"} id={"ProfPhoto"}/>
    </div>
    </>
);

export default AboutMeAndValues