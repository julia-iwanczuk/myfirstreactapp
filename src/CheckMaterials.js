import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import React, {useRef, useState} from 'react';
import back from "./pictures/back.png";
import upload from './pictures/upload.png';
import backbr from "./pictures/back-br.png";
import uploadbr from './pictures/upload-br.png';
import Overlay from './Overlay'; 
import text from './pictures/text.png';
import slides from './pictures/slides.png';
import video from './pictures/video.png';
import audio from './pictures/audio.png';
import graph from './pictures/graph.png';
import next from './pictures/next.png';
import textbr from './pictures/text-br.png';
import slidesbr from './pictures/slides-br.png';
import videobr from './pictures/video-br.png';
import audiobr from './pictures/audio-br.png';
import graphbr from './pictures/graph-br.png';
import nextbr from './pictures/next-br.png';

function CheckMaterials({mode}) {

    const overlay1 = [
        'add text in its plain form or pdf or Word.',
        'check if it adheres to relevant guidelines.',
        'access web tools helping you apply accessibility adjustments',
        '',
        'link it to other materials you have uploaded.',
        'link it to a specific unit.',
    ];

    const overlay2 = [
        'add slides in PowerPoint or pdf or Keynote.',
        'check if they adhere to relevant guidelines.',
        'access web tools helping you apply accessibility adjustments.',
        '',
        'link the slides to other materials you have uploaded.',
        'link the slides to a specific unit.'
    ];

    const overlay3 = [
        'add video in mp4 or mov or YouTube format.',
        'check if it adheres to relevant guidelines.',
        'access web tools helping you apply accessibility adjustments.',
        '',
        'add subtitles.',
        'add script.',
        '',
        'link it to other materials you have uploaded.',
        'link it to a specific unit.',
    ];

    const overlay4 = [
        'add audio recording in mp3 or wav format.',
        'check if it adheres to relevant guidelines.',
        'access web tools helping you apply accessibility adjustments.',
        '',
        'add script.',
        '',
        'link it to other materials you have uploaded.',
        'link it to a specific unit.',
    ];

    const overlay5 = [
        'add a picture/graph in jpg or png format.',
        'check if it adheres to relevant guidelines.',
        'access web tools helping you apply accessibility adjustments.',
        '',
        'add alternative text.',
        'add a description.',
        '',
        'link it to other materials you have uploaded.',
        'link it to a specific unit.',
    ];



    const navigate = useNavigate();

    return (
        <div>
            <div className='head-check'>
                <Link to='/teach' className='back'>
                    <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?uploadbr:upload} className='icon-top'/>
                <h3 className='name'>What sort of materials would you like to check?</h3>
            </div>

            <div className='materials'>
                
                <div className='material' id="accent-outline">
                    <img src={mode==='b'?textbr:text} alt="text"/>
                    <h3>Text</h3>
                    <Overlay className='overlay' steps={overlay1}/>
                    <img src={mode==='b'?nextbr:next} alt='next page' className='next'  onClick={() => {navigate('/guidetext') }}  tabIndex={0} />
                </div>


                <div className='material' id="accent-outline">
                    <img src={mode==='b'?slidesbr:slides} alt="slides"/>
                    <h3>Slides</h3>
                    <Overlay className='overlay' steps={overlay2} />
                    <img src={mode==='b'?nextbr:next} alt='next page' className='next' onClick={() => {navigate('/guideslides') }} tabIndex={0}/>
                </div>

                <div className='material' id="accent-outline">
                    <img src={mode==='b'?videobr:video} alt="video"/>
                    <h3>Video</h3>
                    <Overlay className='overlay' steps={overlay3} />
                    <img src={mode==='b'?nextbr:next} alt='next page' className='next' onClick={() => {navigate('/guidevideo') }} tabIndex={0}/>
                </div>

                <div className='material' id="accent-outline">
                    <img src={mode==='b'?audiobr:audio} alt="audio"/>
                    <h3>Audio recording</h3>
                    <Overlay className='overlay' steps={overlay4} />
                    <img src={mode==='b'?nextbr:next} alt='next page' className='next' onClick={() => {navigate('/guideaudio') }} tabIndex={0}/>
                </div>
                <div className='material' id="accent-outline">
                    <img src={mode==='b'?graphbr:graph} alt="picture or graph"/>
                    <h3>Picture/graph</h3>
                    <Overlay className='overlay' steps={overlay5} />
                    <img src={mode==='b'?nextbr:next} alt='next page' className='next' onClick={() => {navigate('/guidepic') }} tabIndex={0}/>
                </div>
            </div>
        </div>
    )
}
export default CheckMaterials;