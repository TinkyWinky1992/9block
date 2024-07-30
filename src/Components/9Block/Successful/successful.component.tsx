import React from "react";
import './successful.style.css'
import { PasswordIcon } from "../../Icons/PasswordIcon/password.icon.component";

export const Success:React.FC = () => {
    return(
        <div className="layout-success">
            <div className="container-success">
                <PasswordIcon/>
                <div className="layer-success">
                    <h1 className="success-title"> Access Granted</h1>
                    <h3 className="success-description">Start filling these bags, alert has also been triggered</h3>
                </div>
            </div>
        </div>

    )
}