import React from "react";
import { FailedIcon } from "../../Icons/FailedIcon";
import './failed.style.css'

export const Failed:React.FC = () => {
    return(
        <div className="layout-success">
            <div className="container-success">
                <FailedIcon/>
                <div className="layer-success">
                    <h1 className="failed-title">Operation Failed</h1>
                    <h3 className="failed-description">You are trash, don’t ever try again.</h3>
                </div>
            </div>
        </div>
    )
}