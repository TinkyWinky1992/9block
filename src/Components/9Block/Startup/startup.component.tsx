import React, {Dispatch} from "react";
import { AlertIcon } from "../../Icons/AlertIcon";
import './startup.style.css'
 

export const Startup:React.FC<{setStart:Dispatch<React.SetStateAction<boolean>>;}>= ({setStart}) => {

    const handleClick = () => {
        setStart(true)
    }
    return(
        <div className="layout-startup">
            <div className="container-startup ">
                <AlertIcon/>

                <div className="layer-startup">
                    
                    <div className="layer-attention">
                        
                        <h1 className="Title-attention">ATTENTION</h1>
                        <h2 className="operation"> This operation is time sensitive</h2>

                        <h3 className="description-details">You will have to get passed the firewall by matching the 9block to the right panel</h3>
                        <h3 className="when-start"> The moment you start this python script,</h3>
                        <h3 className="timer-exlplain"> the timer will start decreasing.</h3>
                    </div>


                    <div className="layer-button">
                        <div onClick={() => handleClick()} className="button-start">$ execute <span className="block-py"> 9block.py</span> target  
                        <span className="ATM"> ATM</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

/*


    return(
        <div className="layout-startup">

            <div className="conainer-startup">
                <AlertIcon/>
                <div className="layer-startup">
                    
                    <div className="layer-attention">
                        
                        <h1 className="Title-attention">ATTENTION</h1>
                        <h2 className="operation"> This operation is time sensitive</h2>

                        <h3 className="description-details">You will have to get passed the firewall by matching the 9block to the right panel</h3>
                        <h3 className="when-start"> The moment you start this python script,</h3>
                        <h3 className="timer-exlplain"> the timer will start decreasing.</h3>
                    </div>


                    <div className="layer-button">
                        <div onClick={() => handleClick()} className="button-start">$ execute <span className="block-py"> 9block.py</span> target  
                        <span className="ATM"> ATM</span></div>
                    </div>
                </div>

            </div>

        </div>

        */