import React from "react";
import "./App.css";
import back from "./pictures/back.png";
import text from './pictures/text.png';
import backbr from "./pictures/back-br.png";
import textbr from './pictures/text-br.png';
import CardBox from './CardBox';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function GuideText({mode}) {

  const rules = [
    {title: "Don't write long walls of text if not necessary.", extended: "Use bullet point lists instead or break the text into segments." },
    { title: "Don't use italic, underlines or uppercase if you don't have to.", extended: "This may be unreadable to dyslexic students." },
    { title: "Make sure your text is not in an image format.", extended: "The text should be reachable by screen readers." },
    { title: "Use at most 80 characters per line.", extended: "More characters can cause exhausting eye movement." },
    { title: "Do not use justified or centrally aligned text.", extended: "Always present text as left-aligned." },
    {title:"Always clarify abbreviations and acronyms.", extended:"Try doing that on their first ocurence."}
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
                        <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?textbr:text} className='icon-top'/>
                <h3 className='name'>Check your text materials</h3>
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
                        
                <button onClick={openFileDialog} id="accent-background">
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

export default GuideText;