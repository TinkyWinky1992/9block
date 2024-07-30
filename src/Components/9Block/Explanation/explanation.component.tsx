import React from "react";
import "./explanation.style.css";
import { WorningIcon } from "../../Icons";
interface ExplainProps {
    level: number;

}


export const Explain: React.FC<ExplainProps> = ({ level}) => {
    return (
        <div className="note">
            <div className="container-note">
                <WorningIcon/>
                <div className="layer-text-explain">
                    <h2 className="text-level">Level {level}</h2>
                    <h3 className="description-level">
                        Failing to fully replicate will <span className="cause-operation">cause OPERATION to fail</span> and eventually <span className="usb-burn">the USB to burn.</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};
