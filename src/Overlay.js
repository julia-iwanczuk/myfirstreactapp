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
        // Prevent the click event from propagating further
        event.stopPropagation();

        // Call the provided onClick function if it exists
        onClick && onClick(event);
      };
    
      const handleIconClick = (event) => {
        // Toggle the overlay when clicking on the icon
        toggleOverlay();

        // Prevent the default action (e.g., navigation)
        event.preventDefault();
    };
    //
    
    return (
        <div className="overlay-container">
            <div className="overlay-icon"
                onClick={handleIconClick}
                tabIndex={0}
                onKeyDown={(event) => handleKeyDown(event)}>
                <span>i</span>
            </div>
            {showOverlay && (
                <div className="overlay-background" onClick={handleClick}>
                    <div className="overlay-content">
                        <div >
                            <h2 className='overlay-head'>You will be able to:</h2>
                            <button onClick={toggleOverlay} className='x-overlay' id='accent'>&#x2715;</button>
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
            )}
        </div>
    );
};

export default Overlay;
