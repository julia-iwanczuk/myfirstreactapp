import React, { useState } from 'react';
import './OverlayCarousel.css';

const OverlayCarousel = ({steps}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="overlay-container">
            <div className="overlay-icon" onClick={toggleOverlay}>
                <span>i</span>
            </div>
            {showOverlay && (
                <div className="overlay-background">
                    <div className="overlay-content" id='main-color-accent-outline-main-background'>
                        <div >
                            <h2 className='overlay-head'>You will be able to:</h2>
                            <button onClick={toggleOverlay} className='x'>&#x2715;</button>
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

export default OverlayCarousel;
