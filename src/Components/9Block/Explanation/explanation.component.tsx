import React from "react";
import "./explanation.style.css";
import { WorningIcon } from "../../Icons";

interface ExplainProps {
  level: number;
}

export const Explain: React.FC<ExplainProps> = ({ level }) => {
  let levelText = "";
  if (level <=3) {
    levelText = `Level ${level}`;
  } else {
    levelText = ""; 
  }

  return (
    <div className="note">
      <div className="container-note">
        <WorningIcon />
        <div className="layer-text-explain">
          <h2 className="text-level">{levelText}</h2>
          <h3 className="description-level">
            Failing to fully replicate will{" "}
            <span className="cause-operation">cause OPERATION to fail</span> and eventually{" "}
            <span className="usb-burn">the USB to burn.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};