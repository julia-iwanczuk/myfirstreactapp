import React from "react";
import "./App.css";
import back from "./pictures/back.png";
import graph from './pictures/graph.png';
import backbr from "./pictures/back-br.png";
import graphbr from './pictures/graph-br.png';
import CardBox from './CardBox';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function GuidePic({mode}) {

  const rules = [
    {title: "Make sure the picture has a high contrast between the colours.", extended: "The combination of colors between the foreground and the background must be sufficiently strong to be seen by monochromatic monitors and users with colourblindness." },
    { title: "Make the image scalable.", extended: "The image should be scalable by virtual lenses up to twie its original size, and keep the quality of presented content." },
    { title: "Provide at least one alternative format of the image's content.", extended: "Possible alternative formats include alternative text, grayscale image, simplified image for touch printing etc." },
    {title:"If it is a chart or a graph, always add descriptive text.", extended:"Include variable's locations and presented results."}
  ];
  const tools = [
    { title:"Graph to Text Generator", link:"https://www.yeschat.ai/gpts-2OToO2uW1L-Graph-Text-Generator"},
    {title:"Contrast Checker", link:"https://contrastchecker.com/"}
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
                <img src={mode==='b'?graphbr:graph} className='icon-top'/>
                <h3 className='name'>Check your picture materials</h3>
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

export default GuidePic;