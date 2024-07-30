import React from "react";
import "./fullbar.style.css";

export const FullBar: React.FC<{ progress: number }> = ({ progress }) => {
    const filledBars = Math.min(Math.floor(progress / 2), 50);

    return (
        <div className="bar-container">
            {Array.from({ length: 50 }, (_, index) => (
                <div 
                    key={index} 
                    className="bar-part" 
                    style={{ 
                        backgroundColor: index < filledBars ? "#FFDA58" : "rgba(255, 218, 88, 0.20)",
                    }}
                />
            ))}
        </div>
    );
};
