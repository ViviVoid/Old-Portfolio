import React from "react";

class Props {
    name: string;
    location: string;
    days: string[];
    starttime: number;
    endtime: number;
    color: string;
    hyperlink: string;
}

const ScheduleEntry:React.FC<Props> = (props) => {
    let dayEntries : string[] = props.days;
    return (
        <>
            {dayEntries.map((day) => {
                if (props.hyperlink != "") {
                    return (
                        <div className={
                            day
                            + " " + props.name.replace(/\s/g, "",)
                            + " start-" + props.starttime
                            + " end-" +props.endtime
                            + " scheduleEntry"}>
                            <div className={"scheduleEntryText"}>
                                <a href={props.hyperlink}>{props.name}</a>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className={
                            day
                            + " " + props.name.replace(/\s/g, "",)
                            + " start-" + props.starttime
                            + " end-" +props.endtime
                            + " scheduleEntry"}>
                            <div className={"scheduleEntryText"}>
                                {props.name}
                            </div>
                        </div>
                    )
                }
            })}
        </>
    );

}
export default ScheduleEntry;