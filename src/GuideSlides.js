import React from "react";
import "./App.css";
import back from "./pictures/back.png";
import slides from './pictures/slides.png';
import backbr from "./pictures/back-br.png";
import slidesbr from './pictures/slides-br.png';
import CardBox from './CardBox';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function GuideSlides({mode}) {

  const rules = [
    {title: "Avoid long sentences.", extended: "Limit the amount of words in each line and the amount of lines on each slide." },
    { title: "Use plain English.", extended: "The slides should be quick and easy to read. Omit unnecessary abbrieviations." },
    { title: "Use clear headers and titles.", extended: "Use header hierarchy and make sure each slide has a 'main thought'." },
    {title: "Add alternative text for all visual elements.", extended:"Visual elements include pictures, graphs and charts."}
  ];
  const tools = [
    { title:"Accessible content in Prezi", link:"https://support.prezi.com/hc/en-us/articles/360046479113-Creating-accessible-content-in-Prezi-Design"}
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
                <img src={mode==='b'?slidesbr:slides} className='icon-top'/>
                <h3 className='name'>Check your slides</h3>
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

export default GuideSlides;