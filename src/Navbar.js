import './App.css';
import logo from './pictures/logo.png';
import setting from "./pictures/settings.png";
import search from "./pictures/search.png";
import settingbr from "./pictures/settings-br.png";
import searchbr from "./pictures/search-br.png";
import React from 'react';
import { useState } from 'react';
import Accessibility from './Accessibility';

function Navbar({ mode, add, low, addLS, lowLS, addLH, lowLH, chFont, colorScheme }) {
    const [settings, setSettings] = useState(false);
    const toggleOverlay = () => {
        setSettings(!settings);
    };


    return (
        <div>
        <div className='navbar'>
            <img className="logo" src={logo} alt='logo' />
                <h1 className="title">Edinburgh accessibility zone</h1>
                <div className="search-container">
                    <input type="text" placeholder="Search..." id="accent-outline"/>
                    <button type="submit" id="searchButton"><img className="search" src={mode==='b'?searchbr:search}/></button>
                </div>
                <img src={mode==='b'?settingbr:setting} alt="settings" className='settings' onClick={() => toggleOverlay()}/>
            </div>
            <h2 className='safe-space'> Your safe space for all things in accessibility - support, resources, education, community.</h2> 
            {settings && (<Accessibility toggleOverlay={toggleOverlay} add={add} low={low} addLS={addLS} lowLS={lowLS} addLH={addLH} lowLH={lowLH} chFont={chFont} colorScheme={colorScheme} />)}
        </div>
    )
}

export default Navbar;