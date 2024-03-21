import React, { useState } from 'react';
import './CarouselPrompt.css';

function CarouselPrompt({ content, toggleOverlay }) {
    
    const totalRectangles = content.length;
    const rectanglesPerPage = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1) % (totalRectangles-2));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % (totalRectangles-2));
    };

    const handleKeyDown = (event, prompt) => {
        if (event.key === 'Enter') {
          toggleOverlay(prompt);
        }
      };

    return (
        <>
        <div className='carousel-container'>
            <div className="slider-container">
                <div className="slider-content" style={{ transform: `translateX(-${currentIndex * (203 / rectanglesPerPage)}%)`, width: `${6 * (98 / rectanglesPerPage)}%` }}>
                    {content.map((item, index) => (
                        <div key={index} className="rectangle">
                        <p className='prompt'>{item.text}</p>
                            <div className="overlay_icon_prompt" id='main-color-accent-outline' tabIndex={0} onClick={() => toggleOverlay(item.prompt)} onKeyDown={(event) => handleKeyDown(event, item.prompt)} >
                                <span className='plus'>+</span>
                            </div>
                    </div>
                    ))}
                </div>
                <button className="arrow prev" onClick={handlePrev} id="accent-background">&#10094;</button>
                <button className="arrow next" onClick={handleNext} id="accent-background">&#10095;</button>
                <div className="dots">
                    {[...Array(totalRectangles-2)].map((_, index) => (
                        <span key={index} className={index === currentIndex ? 'dot active' : 'dot'} id={index === currentIndex ?'accent-background':""}></span>
                        ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default CarouselPrompt;
