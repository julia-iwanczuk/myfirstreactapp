import './Accessibility.css';
import React from 'react';
import { useState } from 'react';
import bright from './pictures/bright.png';
import dark from './pictures/dark.png';
import purple from './pictures/purple.png';


function Accessibility({toggleOverlay, add, low, addLS, lowLS, addLH, lowLH, chFont, colorScheme }) {
    
    const [selectedFont, setSelectedFont] = useState('Inder'); 

    const changeFont = (event) => {
        setSelectedFont(event.target.value);
        chFont(event.target.value);
    };

    return (
        <>
            <div className='accessibility'>
            <button onClick={toggleOverlay} className='x'>&#x2715;</button>
                <div className='acc-opt'>
                    <h2>Font size</h2>
                    <button className='add-font' onClick={low}>-</button>
                    <button className='add-font' onClick={add}>+</button>
                </div>
                <div className='acc-opt'>
                    <h2>Zoom in/out</h2>
                    <button className='add-font' onClick={low}>-</button>
                    <button className='add-font' onClick={add}>+</button>
                </div>
                <div className='acc-opt'>
                    <h2>Line height</h2>
                    <button className='add-font' onClick={lowLH}>-</button>
                    <button className='add-font' onClick={addLH}>+</button>
                </div>
                <div className='acc-opt'>
                    <h2>Letter spacing</h2>
                    <button className='add-font' onClick={lowLS}>-</button>
                    <button className='add-font' onClick={addLS}>+</button>
                </div>
                <div className='acc-opt'>
                    <h2>Colour scheme</h2>
                    <button className='add-font' onClick={()=>colorScheme("n")}><img src={dark} alt="dark mode"/></button>
                    <button className='add-font' onClick={() => colorScheme("b")}><img src={bright} alt="bright mode" /></button>
                    <button className='add-font' onClick={()=>colorScheme("p")}><img src={purple} alt="purple mode"/></button>
                </div>
                <div className='acc-opt'>
                    <h2>Alternative font</h2>
                    <select value={selectedFont} onChange={changeFont} >
                        <option value="Inder">Inder</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Palatino">Palatino</option>
                        <option value="Lucida Sans">Lucida Sans</option>
                        <option value="Impact">Impact</option>
                        <option value="Trebuchet MS">Trebuchet MS</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Arial Black">Arial Black</option>
                    </select>
                </div>
            </div>
        </>
        )
}

export default Accessibility;