import React, { useState, useEffect } from "react";
import axios from 'axios';
import { TestBlock } from "./TestBlocks";
import { ExampleBlocks } from "./ExmapleBlocks";
import { Explain } from "./Explanation";
import { TimeInfo } from "./Time";
import { LinuxIcon } from "../Icons";
import { Success } from "./Successful";
import { Failed } from "./Failed";
import { CSSTransition } from "react-transition-group";
import { Startup } from "./Startup";
import { Progress } from "./Progress";
import './9blockgame.style.css';

type CorrectBlocks = {
    x: number;
    y: number;
};

export const BlockSecuritygame: React.FC = () => {
    const [correctBlocks, setCorrectBlocks] = useState<CorrectBlocks[]>([]);
    const [level, setLevel] = useState(1);
    const [time, setTime] = useState<number>(1);
    const [blocks, setBlocks] = useState<number[][]>(Array.from({ length: 3 }, () => Array(3).fill(0)));
    const [progress, setProgress] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [isWin, setIsWin] = useState<boolean>(false);
    const [showTransition, setShowTransition] = useState<boolean>(false);
    const [transitionType, setTransitionType] = useState<'success' | 'failed' | 'none'>('none');
    const [isStart, setIsStart] = useState<boolean>(false);
    const [isGameActive, setIsGameActive] = useState<boolean>(false);

    useEffect(() => {
        if (isStart) {
            if (level > 3) {
                setIsWin(true);
            } else {
                const levelDecision = () => {
                    switch (level) {
                        case 1:
                            return 8;
                        case 2:
                            return 5;
                        case 3:
                            return 3;
                        default:
                            return 0;
                    }
                };

                const startTime = levelDecision() * 1000;
                setTime(startTime);
            }
        }
    }, [level, isStart]);

    useEffect(() => {
        if (isStart && time > 0 && !isOver && !isWin && !isCorrect) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 10);
            }, 10);

            return () => clearInterval(timer);
        }
    }, [isStart, time, isOver, isWin]);

    useEffect(() => {
        if ((isOver || isWin) && isStart) {
            setTimeout(() => {
                setTransitionType(isWin ? 'success' : 'failed');
                setShowTransition(true);

                setTimeout(async () => {
                    try {
                        const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui';
                        const eventName = "closeATM";

                        const resp = await axios.post(`https://${resourceName}/${eventName}`, {}, {
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8',
                            }
                        });

                        console.log(resp.data);
                    } catch (error) {
                        console.error(error);
                    }
                }, 5000);  // 5 seconds delay before closing the UI
            }, 1000);
        }
    }, [isOver, isWin, isStart]);

    useEffect(() => {
        if (progress === 100) {
            setIsGameActive(true);
        }
    }, [progress]);

    const formatTime = (time: number) => {
        const seconds = Math.floor(time / 1000);
        const milliseconds = time % 1000;
        return `${seconds}.${milliseconds.toString().padStart(2, '0')}`;
    };

    if (time === null) {
        return null;
    }

    return (
        <div className="BlockMain">
            <div className="Bar">
                <div className="layer-bar">
                    <LinuxIcon />
                    <h4 className="bar-title">9block ~ HACK THE ATM</h4>
                </div>
            </div>

            <div className="layer-game">
                {!isGameActive && <Progress progress={progress} setProgress={setProgress} />}

                <CSSTransition
                    in={!isStart && isGameActive}
                    timeout={500}
                    classNames="fade-startup"
                    unmountOnExit
                >
                    <div>
                        <Startup setStart={setIsStart} />
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={isStart && !showTransition}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <div >
                        <div className="Explanation">
                            <Explain level={level} />
                            <TimeInfo number={formatTime(time)} isOver={isOver} isWin={isWin} />
                        </div>

                        <div className="LayoutGame">
                            <ExampleBlocks
                                checkBlocks={blocks}
                                setCheckBlocks={setBlocks}
                                setNewCorrectBlocks={setCorrectBlocks}
                                isCorrect={isCorrect}
                            />
                            <TestBlock
                                correctBlocks={correctBlocks}
                                timer={time}
                                isOver={isOver}
                                setisOver={setIsOver}
                                isWin={isWin}
                                setLevel={setLevel}
                                setIsCorrect={setIsCorrect}
                                isCorrect={isCorrect}
                            />
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={showTransition && transitionType === 'success'}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <div>
                        <Success />
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={showTransition && transitionType === 'failed'}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <div>
                        <Failed />
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};
