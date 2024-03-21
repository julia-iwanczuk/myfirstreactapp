import React, { useState } from 'react';
import './Overlay.css';

const Overlay = ({steps, onClick}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          toggleOverlay();
        }
    };
    //
      const handleClick = (event) => {
        event.stopPropagation();

        onClick && onClick(event);
      };
    
      const handleIconClick = (event) => {
        toggleOverlay();

        event.preventDefault();
    };
    //
    
    return (
        <div className="overlay-container">
            <div className="overlay-icon"
                id="main-color-accent-outline"
                onClick={handleIconClick}
                tabIndex={0}
                onKeyDown={(event) => handleKeyDown(event)}>
                <span >i</span>
            </div>
            {showOverlay && (
                <div className="overlay-background" onClick={handleClick}>
                    <div className="overlay-content" id='main-color-accent-outline-main-background'>
                        <div >
                            <h2 className='overlay-head'>You will be able to:</h2>
                            <button onClick={toggleOverlay} className='x-overlay' id='accent'>&#x2715;</button>
                        </div>
                        <hr id='accent-outline'/>
                        <ul>
                            {steps.map((sentence, index) => (
                                sentence.trim() !== '' ? (
                                <li key={index}>{sentence}</li>
                                ) : (
                                <hr key={index} id='accent-outline'/>
                                )
                            ))}
                        </ul>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Overlay;
