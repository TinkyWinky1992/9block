import React, { useEffect, Dispatch } from "react";
import './exmapleblocks.style.css'

type CorrectBlocks = {
    x: number;
    y: number;
};

type ExampleBlockProps = {
    checkBlocks: number[][];
    setCheckBlocks: Dispatch<React.SetStateAction<number[][]>>;
    setNewCorrectBlocks: Dispatch<React.SetStateAction<CorrectBlocks[]>>;

    isCorrect: boolean;
};


export const ExampleBlocks: React.FC<ExampleBlockProps> = ({ checkBlocks, setCheckBlocks, setNewCorrectBlocks, isCorrect}) => {
    const gameLogic = () => {
        const resetBlocks = Array.from({ length: 3 }, () => Array(3).fill(0));
        const newBlocks = resetBlocks.map(row => [...row]);
        const tempCorrectBlocks: CorrectBlocks[] = [];

        while (tempCorrectBlocks.length < 5) {
            const x = Math.floor(Math.random() * 3);
            const y = Math.floor(Math.random() * 3);

            if (!tempCorrectBlocks.some(block => block.x === x && block.y === y)) {
                newBlocks[x][y] = 1;
                tempCorrectBlocks.push({ x, y });
            }
        }
        setCheckBlocks(newBlocks);
        setNewCorrectBlocks(tempCorrectBlocks);
    };

    useEffect(() => {
        gameLogic()
    }, []);

    useEffect(() => {
        if(isCorrect)
            setTimeout(() => {
                gameLogic()
            }, 2000);

        
    }, [isCorrect]); 


    return (
        <div className="layout-tutorial">
            <div className="layer-tutorial">
                <h4>Replicate</h4>
                <div className="tutorial">
                    <div>
                        {checkBlocks.map((row, rowIndex) => (
                            <div key={rowIndex} className="Row">
                                {row.map((block, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={`Block ${block === 1 ? 'yellow' : ''}`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
