import './App.css';
import support from './pictures/support.png';
import more from './pictures/more.png';
import message from "./pictures/message.png";
import back from "./pictures/back.png"
import supportbr from './pictures/support-br.png';
import morebr from './pictures/more-br.png';
import messagebr from "./pictures/message-br.png";
import backbr from "./pictures/back-br.png"
import { Link } from 'react-router-dom';
import React from 'react';



function Student({mode}) {
return(
  <>
    <div className='head'>
      <Link to='/' className='back'>
        <img src={mode==='b'?backbr:back} alt="back"/>
      </Link>
      <h3 className='want'>I want to...</h3>
    </div>

    <div className='options'>
      
      <Link to='/message' className='option-teach'>
        <img src={mode==='b'?messagebr:message} id="pic-option" alt="message" />
        <h3 id="main-color">generate a message</h3>
      </Link>

      <Link to='/support-student' className='option-teach'>
          <img src={mode==='b'?supportbr:support} id="pic-option" alt="support"/>
          <h3 id="main-color">find support</h3>
      </Link>

      <Link to='/learn' className='option-teach'>
          <img src={mode==='b'?morebr:more} id="pic-option" alt="more" />
          <h3 id="main-color">learn more</h3>
      </Link>
    </div>
  </> 
);
}

export default Student;
