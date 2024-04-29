import App from "../App";
import SideNavigationBar from "../SideNavigationBar";
import AboutMeAndValues from "../Home/AboutMeAndValues";
import Schedule from "../Home/Schedule";
import React from "react";

const Contact = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"sideBar"}>
                <SideNavigationBar />
            </div>
            <div id={"contentPage"}>
                <div id={"greeting"}>
                    <h1>
                        Looking to connect?
                    </h1>

                    <p>
                        Fill the form below and I'll get in touch with you!
                    </p>
                </div>
            </div>
        </div>
        // <App />
    );
}

export default Contact