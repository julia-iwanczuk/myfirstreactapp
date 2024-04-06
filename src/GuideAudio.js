import React from "react";
import "./App.css";
import back from "./pictures/back.png";
import audio from './pictures/audio.png';
import backbr from "./pictures/back-br.png";
import audiobr from './pictures/audio-br.png';
import CardBox from './CardBox';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function GuideAudio({mode}) {

  const rules = [
    {title: "Always provide the student with visual alternative text.", extended: "The text should be a direct reflection of what is said in the audio." },
    { title: "Make the controls clear and visible.", extended: "The controls should include volume control, pause, play and stop." },
    {title:"Audio content should have subtitles, captions or complete description.", extended:"The user should be able to synchronise the subtitles with audio."}
  ];
  const tools = [
    { title:"Audio to Text", link:"https://www.veed.io/tools/audio-to-text"},
    {title:"Transcribe your recording by Microsoft", link:"https://support.microsoft.com/en-gb/office/transcribe-your-recordings-7fc2efec-245e-45f0-b053-2a97531ecf57"}
  ];

const [dragging, setDragging] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);
const [numPages, setNumPages] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = (file) => {
    setSelectedFile(file);
  };
    
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const openFileDialog = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

    return (
        <>
            <div className='head-check'>
                <Link to='/checkmat' className='back'>
                        <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?audiobr:audio} className='icon-top'/>
                <h3 className='name'>Check your audio materials</h3>
            </div>


            <div className="file-upload">
                <div className={`drop-area ${dragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                <div className="inner-window" id='accent-outline'>
                  <h2>Drop your files here or search local library</h2>
                    <input type="file" onChange={handleFileInput} webkitdirectory="" directory="" />
                        
                    {selectedFile && (
                    <div className="pdf-preview">
                        <iframe title="File prev"
                        src={URL.createObjectURL(selectedFile)} 
                        width="100%"
                        height="100%"></iframe>
                    </div>
                        )}
                        
                <button onClick={openFileDialog} id='accent-background'>
              Search local library
            </button>
          </div>
      </div>
        </div>

        <h2 className="guide-title">Check these rules off of your list:</h2>
        
        {rules.map((item) => (
          <CardBox title={item.title} extendedText={item.extended}/>
        ))}

       <div className="onlinetools">
          <h2 className="guide-title">Online tools:</h2>
          {tools.map((item) => (
            <a href={item.link} id="main-color">{ item.title}</a>
        ))}
        </div>
      </>
    )
}

export default GuideAudio;