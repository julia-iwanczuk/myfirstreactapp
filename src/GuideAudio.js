import React from "react";
import "./App.css";
import back from "./pictures/back.png";
import audio from './pictures/audio.png';
import CardBox from './CardBox';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function GuideAudio() {

  const rules = [
    {title: "Something", extended: "nckwjenknw" },
    {title: "Another test", extended: "behdebhebdehbdehdbe"}
  ];
  const tools = [
    { title:"Text converter", link:"https://textconverter.com/split-text-into-paragraphs"},
    {title:"Braille converter", link:"https://www.brailletranslator.org/"}
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
                        <img src={back} alt="back"/>
                </Link>
                <img src={audio} className='icon-top'/>
                <h3 className='name'>Check your audio materials</h3>
            </div>


            <div className="file-upload">
                <div className={`drop-area ${dragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                <div className="inner-window">
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
                        
                <button onClick={openFileDialog}>
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
            <a href={item.link}>{ item.title}</a>
        ))}
        </div>
      </>
    )
}

export default GuideAudio;