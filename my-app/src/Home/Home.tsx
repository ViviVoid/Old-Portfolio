import React from 'react';
import logo from "../logo.svg";
import SideNavigationBar from "../SideNavigationBar";
import Schedule from "./Schedule";
import "../styles/browser.css"
import "./Home.css"
import AboutMeAndValues from "./AboutMeAndValues";

const Home:React.FC = () => (
    <div id={"mainFlexBody"}>
        <div id={"sideBar"}>
            <SideNavigationBar />
        </div>
        <div id={"contentPage"}>
            <AboutMeAndValues />
            <Schedule />
        </div>
    </div>
        // <App />
    );

export default Home