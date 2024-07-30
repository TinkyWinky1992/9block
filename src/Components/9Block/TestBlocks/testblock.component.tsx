import React, { useState, useEffect, Dispatch } from "react";
import { NotActiveIcon } from "../../Icons";
import './testblock.style.css';

type CorrectBlocks = {
    x: number;
    y: number;
};

type TestBlockProps = {
    correctBlocks: CorrectBlocks[]; 
    timer: number;
    setisOver: Dispatch<React.SetStateAction<boolean>>;
    isOver: boolean;
    isWin: boolean;
    setLevel: Dispatch<React.SetStateAction<number>>;

    isCorrect: boolean;
    setIsCorrect: Dispatch<React.SetStateAction<boolean>>;
};

export const TestBlock: React.FC<TestBlockProps> = ({ correctBlocks, timer, setisOver, isOver, isWin, setLevel, isCorrect , setIsCorrect}) => {
    const [testBlocks, setTestBlocks] = useState<number[][]>(Array.from({ length: 3 }, () => Array(3).fill(0)));
    const [selectedCount, setSelectedCount] = useState(0);
    

    const handleBlockClick = (rowIndex: number, colIndex: number) => {
        if (isOver || isWin || isCorrect || testBlocks[rowIndex][colIndex] === 1) return;

        const newBlocks = testBlocks.map(row => [...row]);
        let correct = 0;

        correctBlocks.forEach(block => {
            if (block.x === rowIndex && block.y === colIndex) {
                correct = 1;
                setSelectedCount(prevCount => prevCount + 1);
                newBlocks[rowIndex][colIndex] = 1;
            }
        });

        setTestBlocks(newBlocks);
        if (correct === 0) setisOver(true);
    };

    useEffect(() => {
        if (timer === 0) 
            setisOver(true);
        
    }, [timer, setisOver]);

    useEffect(() => {
        if (selectedCount === 5) {
            setIsCorrect(true);
            setTimeout(() => {
                setIsCorrect(false);
                setLevel(prevLevel => prevLevel + 1);
                setTestBlocks(Array.from({ length: 3 }, () => Array(3).fill(0)));
                setSelectedCount(0);
            }, 2000);
        }
    }, [selectedCount, setLevel]);

    return (
        <div className="layout-test">
            <div className="layer-test">
                <h4 className="title-test">9block</h4>
                <div className={`Game ${isOver ? 'red' : ''} ${isWin ? 'green' : ''}`}>
                    {testBlocks.map((row, rowIndex) => (
                        <div key={rowIndex} className="Row">
                            {row.map((block, colIndex) => (
                                <div
                                    key={colIndex}
                                    className={`BlockTest ${block === 1 ? 'yellow' : ''} ${isOver ? 'red' : ''} ${isCorrect ? 'green' : ''}
                                                ${block === 1 && isOver ? 'red-mark' : ''} ${block === 1 && isCorrect ? 'green-mark' : ''}
                                                ${block === 1 ? 'selected' : ''}`}
                                    onClick={() => handleBlockClick(rowIndex, colIndex)}
                                >
                                    {isOver && block === 0 && (
                                        <div className="icon-container">
                                            <NotActiveIcon />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
