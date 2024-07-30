import React from "react";
import './time.style.css';
import { TimerIcon } from "../../Icons";
interface TimeInfoProps {
    number: string;
    isWin: boolean
    isOver: boolean
}

export const TimeInfo: React.FC<TimeInfoProps> = ({ number, isWin, isOver }) => {
    return (
        <div className="time">
            <div className="container-layer-time">
                <TimerIcon/>
                <div className="layer-text-time">
                    <h2 className="title-Time">Time left</h2>
                    <h3 className="description-Time">
                        This is a time sensitive scenario <br /> 
                        watch out for the timer below <br /> 
                        <span className={`time-left ${isWin === true ? 'green' : ''} ${isOver === true ? 'red' : ''}`}>{number}</span> 
                        <span className={`time-sensitive ${isWin === true ? 'green' : ''} ${isOver === true ? 'red' : ''}`}>seconds~ left</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};
//time-sensitive
//className={`Block ${block === 1 ? 'yellow' : ''}`}