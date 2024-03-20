import './App.css';
import support from './pictures/support.png';
import more from './pictures/more.png';
import message from "./pictures/message.png";
import { Link } from 'react-router-dom';
import React from 'react';
import back from "./pictures/back.png"


function Student() {
return(
  <>
    <div className='head'>
      <Link to='/' className='back'>
        <img src={back} alt="back"/>
      </Link>
      <h3 className='want'>I want to...</h3>
    </div>

    <div className='options'>
      
      <Link to='/message' className='option-teach'>
        <img src={message} id="pic-option" alt="message" />
        <h3>generate a message</h3>
      </Link>

      <Link to='/support-student' className='option-teach'>
          <img src={support} id="pic-option" alt="support"/>
          <h3>find support</h3>
      </Link>

      <Link to='/learn' className='option-teach'>
          <img src={more} id="pic-option" alt="more" />
          <h3>learn more</h3>
      </Link>
    </div>
  </> 
);
}

export default Student;
