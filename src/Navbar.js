import './App.css';
import logo from './pictures/logo.png';
import setting from "./pictures/settings.png";
import React from 'react';
import { useState } from 'react';
import search from "./pictures/search.png";
import Accessibility from './Accessibility';

function Navbar({ add, low, addLS, lowLS, addLH, lowLH, chFont, colorScheme }) {
    const [settings, setSettings] = useState(false);
    const toggleOverlay = () => {
        setSettings(!settings);
    };


    return (
        <div>
        <div className='navbar'>
            <img className="logo" src={logo} alt='logo' />
                <h1 className="title">Edinburgh accessibility zone</h1>
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="Search..."/>
                    <button type="submit" id="searchButton"><img className="search" src={search}/></button>
                </div>
                <img src={setting} alt="settings" className='settings' onClick={() => toggleOverlay()}/>
            </div>
            <h2 className='safe-space'> Your safe space for all things in accessibility - support, resources, education, community.</h2> 
            {settings && (<Accessibility toggleOverlay={toggleOverlay} add={add} low={low} addLS={addLS} lowLS={lowLS} addLH={addLH} lowLH={lowLH} chFont={chFont} colorScheme={colorScheme} />)}
        </div>
    )
}

export default Navbar;