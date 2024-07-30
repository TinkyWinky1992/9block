import React, {useEffect, Dispatch } from "react";
import "./progress.style.css";
import { FullBar } from "./FullBar";

type ProgressType = {
    progress: number;
    setProgress: Dispatch<React.SetStateAction<number>>;
}

export const Progress: React.FC<ProgressType> = ({ progress, setProgress }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev: number) => (prev < 100 ? prev + 2 : 100));
        }, 100);

        return () => clearInterval(interval);
    }, [setProgress]);

    return (
        <div className="layout-progress">
            <div className="layer-progress">
                <div className="container-progress">
                    <div className="layer-loading">
                        <h4 className="loading-title">
                            {"executing "}
                            <span className="block-word">9block</span>
                            <span className="py-word">.py </span>
                            <span className="loading-bar"></span>
                            script
                        </h4>
                        <div className="container-loading">
                            <FullBar progress={progress} />
                        </div>
                        <div className="loading-container">
                            <span className="loading-bar-bracket">[</span>
                            <span className="loading-bar-number">{progress}</span>
                            <span className="loading-bar-percent">%</span>
                            <span className="loading-bar-bracket">]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
