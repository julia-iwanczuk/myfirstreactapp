import React, { useState } from 'react';
import './Carousel.css';
import OverlayContent from './OverlayContent';
const Carousel = ({ content }) => {
    const steps1 = [
        "access a self-referral form for staff.",
        "Workplace adjustment form and guidance"
    ];
    const totalRectangles = content.length;
    const rectanglesPerPage = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1) % (totalRectangles-2));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % (totalRectangles-2));
    };

    const [showOverlay, setShowOverlay] = useState(false);
    const [overlaySteps, setOverlaySteps] = useState([]);

    const toggleOverlay = (steps) => {
        setShowOverlay(!showOverlay);
        setOverlaySteps(steps);
    };

    const handleKeyDown = (event, steps) => {
        if (event.key === 'Enter') {
          toggleOverlay(steps);
        }
      };

    return (
        <>
        <div className='carousel-container'>
            <div className="slider-container">
                <div className="slider-content" style={{ transform: `translateX(-${currentIndex * (203 / rectanglesPerPage)}%)`, width: `${6 * (98 / rectanglesPerPage)}%` }}>
                    {content.map((item, index) => (
                        <div key={index} className="rectangle">
                        <a href={item.link} className='link' target="_blank" id="main-color">{item.text}</a>
                            <div className="overlay_icon_carousel" id='main-color-accent-outline' tabIndex={0} onClick={() => toggleOverlay(item.steps)} onKeyDown={(event) => handleKeyDown(event, item.steps)} >
                                <span>i</span>
                            </div>
                    </div>
                    ))}
                </div>
                <button className="arrow prev" onClick={handlePrev} id="accent-background">&#10094;</button>
                <button className="arrow next" onClick={handleNext} id='accent-background'>&#10095;</button>
                <div className="dots">
                    {[...Array(totalRectangles-2)].map((_, index) => (
                        <span key={index} className={index === currentIndex ? 'dot active' : 'dot'} id={index === currentIndex ?'accent-background':""}></span>
                    ))}
                </div>
            </div>
        {showOverlay && (
        <OverlayContent steps={overlaySteps} toggleOverlay={toggleOverlay} />
      )}
        </div>
    </>
    );
};

export default Carousel;
