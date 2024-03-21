import React from "react";
import './OverlayContent.css';

function OverlayContent({ steps, toggleOverlay }) {
    const handleKeyDown = (event, steps) => {
        if (event.key === 'Enter') {
          toggleOverlay(steps);
        }
      };
    return (
        <div className="overlay-background">
            <div className="overlay-content">
                <div >
                    <h2 className='overlay-head'>You will be able to:</h2>
                    <button onClick={toggleOverlay} tabIndex={0} onKeyDown={(event) => handleKeyDown(event, steps)} className='x-map' id="accent">&#x2715;</button>
                </div>
                <hr />
                <ul>
                    {steps.map((sentence, index) => (
                        sentence.trim() !== '' ? (
                            <li key={index}>{sentence}</li>
                        ) : (
                            <hr key={index} />
                        )
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OverlayContent;