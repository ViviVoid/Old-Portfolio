import "./styles/schedule.css"
import "./styles/y2t2.css"
import "./styles/browser.css"

const Schedule:React.FC = () => (
    <>
        <meta charSet="UTF-8" />
        <title>Andy Dao's Schedule</title>
        <link rel="stylesheet" href="browser.css" />
        <link rel="stylesheet" href="y2t2.css" />
        <link rel="stylesheet" href="schedule.css" />
        <link rel="icon" type="image/x-con" href="kokomunication_FEESH.png" />
        {/*     Bootstrap CDNs */}
        {/*    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">*/}
        {/*    */}
        {/*     Google Charts Library */}
        <div className="navbar">
            <a href="index-nonHtml.html">
                <div className="nav_links">
                    <img src="kokomunication_FEESH.png" alt="Home" />
                </div>
            </a>
            <a href="portfolio.html">
                <div className="nav_links">Portfolio</div>
            </a>
            <a href="home.html">
                <div className="nav_links">Experiences</div>
            </a>
            <a href="CoinFlipperExample/CoinFlipper.html">
                <div className="nav_links"> DOM Coin Flipper</div>
            </a>
        </div>
        <a
            href="https://www.youtube.com/channel/UCEGGVj3RAFKVd2qhpcWARGQ"
            target="_blank"
        >
            <img
                id="FEESH"
                src="kokomunication_FEESH.png"
                alt="Picture of a fish communicating through a portal of water"
            />
        </a>
        <h3>Andy Dao</h3>
        <p>Schedule for Fall</p>
        <div className="schedule">
            <h3 className="time-slot">8:00 AM</h3>
            <h3 className="time-slot">9:00 AM</h3>
            <h3 className="time-slot">10:00 AM</h3>
            <h3 className="time-slot">11:00 AM</h3>
            <h3 className="time-slot">12:00 AM</h3>
            <h3 className="time-slot">1:00 PM</h3>
            <h3 className="time-slot">2:00 PM</h3>
            <h3 className="time-slot">3:00 PM</h3>
            <h3 className="time-slot">4:00 PM</h3>
            <h3 className="time-slot">5:00 PM</h3>
            <h3 className="time-slot">6:00 PM</h3>
            <h3 className="time-slot">7:00 PM</h3>
            <h3 className="time-slot">8:00 PM</h3>
            <h3 className="time-slot">9:00 PM</h3>
            <h3 className="time-slot">10:00 PM</h3>
            <h3 className="day-slot"></h3>
            <h3 className="day-slot">Sunday</h3>
            <h3 className="day-slot">Monday</h3>
            <h3 className="day-slot">Tuesday</h3>
            <h3 className="day-slot">Wednesday</h3>
            <h3 className="day-slot">Thursday</h3>
            <h3 className="day-slot">Friday</h3>
            <h3 className="day-slot">Saturday</h3>
            <div className="SWE2410-121 Monday" id="SWE2410-121Mon">
                {" "}
                SWE2410{" "}
            </div>
            <div className="SWE2410-121 Thursday" id="SWE2410-121Thu">
                {" "}
                SWE2410 <br />
                &lt;LAB&gt;{" "}
            </div>
            <div className="SWE2410-121 Friday" id="SWE2410-121Fri">
                {" "}
                SWE2410{" "}
            </div>
            <div className="SWE2721-121 Monday" id="SWE2721-121Mon">
                {" "}
                SWE2721{" "}
            </div>
            <div className="SWE2721-121 Wednesday" id="SWE2721-121Wed">
                {" "}
                SWE2721 <br />
                &lt;LAB&gt;
            </div>
            <div className="SWE2721-121 Thursday" id="SWE2721-121Thu">
                {" "}
                SWE2721{" "}
            </div>
            <div className="MTH2340-004 Tuesday" id="MTH2340-004Tue">
                {" "}
                MTH2340{" "}
            </div>
            <div className="MTH2340-004 Thursday" id="MTH2340-004Thu">
                {" "}
                MTH2340{" "}
            </div>
            <div className="MTH2340-004 Friday" id="MTH2340-004Fri">
                {" "}
                MTH2340{" "}
            </div>
            <div className="UXD1001-001 Tuesday" id="UXD1001-001Mon">
                {" "}
                UXD1001{" "}
            </div>
            <div className="UXD1001-001 Wednesday" id="UXD1001-001Wed">
                {" "}
                UXD1001{" "}
            </div>
            <div className="UXD1001-001 Friday" id="UXD1001-001Fri">
                {" "}
                UXD1001{" "}
            </div>
            <div className="MTH2480-004 Tuesday" id="MTH2310-004Tue">
                {" "}
                MTH2480{" "}
            </div>
            <div className="MTH2480-004 Wednesday" id="MTH2310-004Thu">
                {" "}
                MTH2480{" "}
            </div>
            <div className="MTH2480-004 Friday" id="MTH2310-004Fri">
                {" "}
                MTH2480{" "}
            </div>
            {/*        <div class="FreeHour" id="FreeHourTue"> Free Hour </div>*/}
            {/*        <div class="FreeHour" id="FreeHourThu"> Free Hour </div>*/}
            <div className="EWB" id="EWB-Weekly">
                {" "}
                <a href="https://www.ewb-msoe.org/" target="_blank">
                    HEC Meeting
                </a>{" "}
            </div>
            {/*        <div class="EWB" id="EWB-Fundraising"> <a href="https://www.ewb-msoe.org/" target="_blank">HEC Fundraising Meeting</a> </div>*/}
            <div className="Thursday" id="FSC-Weekly">
                {" "}
                Fraternity Sorority Council Meeting
            </div>
            {/*        <div class="SohoniAdvisingPlus" id="RaiderSelect"> Raider Select </div>*/}
            {/*        <div class="RRobotics" id="EPC"><a href="https://linktr.ee/raider_robotics" target="_blank">RR EPC Meeting</a> </div>*/}
            <div className="RRobotics" id="RR-EBoard">
                {" "}
                <a href="https://linktr.ee/raider_robotics" target="_blank">
                    RR E-Board Meeting
                </a>
            </div>
            <div className="RRobotics" id="RRWeekly-Team">
                {" "}
                <a href="https://linktr.ee/raider_robotics" target="_blank">
                    RR General Meeting{" "}
                </a>
            </div>
            <div id="MEE">
                {" "}
                <a href="https://www.pinterest.com/mythoserosechos/" target="_blank">
                    MEE
                </a>{" "}
            </div>
            {/*        <div class="Lunabots" id="LunaGeneral"> <a href="https://www.facebook.com/MSOENASALunaboticsCompetition/" target="_blank">Lunabotics General Meeting </a></div>*/}
            {/*        <div class="Lunabots" id="LunaElecControls"><a href="https://www.facebook.com/MSOENASALunaboticsCompetition/" target="_blank">Lunabotics EleCont Meeting</a></div>*/}
            <div id="TTC"> Table Tennis Club </div>
            {/*        <div class="Runnin" id="RunninMonday"> <a href="https://www.youtube.com/watch?v=O9ZwN7s20ec" target="_blank">Runnin'</a></div>*/}
            {/*        <div class="Runnin" id="RunninThursday"> <a href="https://www.youtube.com/watch?v=O9ZwN7s20ec" target="_blank">Runnin'</a></div>*/}
            {/*        <div class="SSE" id="SSEWebDev-Wedenesday"> <a href="https://msoe-sse.com/" target="_blank">SSE WebDev React</a></div>*/}
            <div className="Triangle" id="TriangleWeekly">
                <a href="https://www.facebook.com/TriangleMSOE/" target="_blank">
                    Triangle Meeting
                </a>
            </div>
            <div className="Triangle thursday" id="TriangleWeeklyEBoard">
                <a href="https://www.facebook.com/TriangleMSOE/" target="_blank">
                    Triangle eBoard Meeting
                </a>
            </div>
            <div className="Miáucoles" id="Miáucoles">
                {" "}
                Miáucoles{" "}
            </div>
            {/*        <div class="LeagueOfLegends" id="LeagueRankedGrinding">*/}
            {/*            <a href="https://www.op.gg/summoners/na/wehadwar?hl=en_US" target="_blank">*/}
            {/*                Grinding Ranked League*/}
            {/*            </a>*/}
            {/*        </div>*/}
            <div className="MeTime" id="SelfWebDev">
                Website Maintenance
            </div>
            <div className="DnD" id="DnDDenDen">
                {" "}
                DnD w/ Den Den
            </div>
            <div className="MAIC Monday" id="reschMeeting1">
                MAIC Resch. Group
            </div>
            <div className="MAIC Thursday" id="reschMeeting2">
                MAIC Resch. Group
            </div>
            <div className="MAIC Tuesday" id="MAICeBoard">
                {" "}
                <a href="http://msoe-maic.com/index.html" target="_blank">
                    MAIC eBoard
                </a>
            </div>
            <div className="MAIC" id="MAIC-Weekly">
                {" "}
                <a href="http://msoe-maic.com/index.html" target="_blank">
                    MAIC
                </a>
            </div>
            {/*        <div class="PaniniTime" id="PaniniFriday"> Panini Time </div>*/}
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
            <div className="empty" />
        </div>
    </>
);
export default Schedule;