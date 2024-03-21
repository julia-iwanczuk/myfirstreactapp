import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rootFontSize = 16;

function addFont() {
    rootFontSize += 1;
    renderRoot();
}

function lowFont() {
    rootFontSize -= 1;
    renderRoot();
}

let rootLetterSpacing = 1;

function addLetterSpacing() {
    rootLetterSpacing += 1;
    renderRoot();
}

function lowLetterSpacing() {
    rootLetterSpacing -= 1;
    renderRoot();
}

let rootLineHeight = 1;

function addLineHeight() {
    rootLineHeight += 1;
    renderRoot();
}

function lowLineHeight() {
    rootLineHeight -= 1;
    renderRoot();
}

let font = "Inder";

function chFont(curFont) {
    font = curFont;
    renderRoot(); 
}

let backgroundColor = 'black';
let textColor = 'white'; 
let accentColor = 'yellow';
let cMode = "n";

function colorScheme(mode) {
    if (mode === "n") {
        cMode = "n";
        backgroundColor = 'black';
        textColor = 'white';
        accentColor = 'yellow';
    } else if (mode === 'b') {
        cMode = "b";
        backgroundColor = 'beige';
        textColor = 'black';
        accentColor = '#1e9fb0';
    } else if (mode === "p") {
        cMode = "p";
        backgroundColor = '#e3cafa';
        textColor = 'darkslateblue';
        accentColor = '#286136';
    }
    renderRoot();
}



function renderRoot() {
    root.render(
        <div style={{ fontSize: `${rootFontSize}px`, letterSpacing: `${rootLetterSpacing}px`, lineHeight:`${rootLineHeight}`, fontFamily:`${font}`, backgroundColor: `${backgroundColor}`,color:`${textColor}`}}>
            <App mode={cMode} add={addFont} low={lowFont} addLS={addLetterSpacing} lowLS={lowLetterSpacing} addLH={addLineHeight} lowLH={lowLineHeight} chFont={chFont} colorScheme={colorScheme} />
            <style> {` 
            #accent {color: ${accentColor};} 
            *{background-color:${backgroundColor}} 
            #main-color {color:${textColor}} 
            #main-background {background-color:${backgroundColor}} 
            #accent-background{background-color:${accentColor}}
            #accent-outline {border-color:${accentColor}}
            #main-color-accent-outline{border-color:${accentColor};color:${textColor}}
            #main-color-accent-outline-main-background{border-color:${accentColor};color:${textColor};background-color:${backgroundColor}}
            `}</style>
        </div>
    );
}

renderRoot();