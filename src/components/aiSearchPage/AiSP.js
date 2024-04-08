import React from 'react';
import './AiSPD.css'
//import { Link } from 'react-router-dom';


const aisb =() => {

    return (
    
    <>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>

    <div className="main_box">
    <input type="checkbox" id="check"></input>
    <div className="btn_one">
      <label for="check">
        <i className="fas fa-bars"></i>
      </label>
    </div>
    <div className="sidebar_menu">
      <div className="logo">
        <a href="#.">Giftopia</a>
          </div>
        <div className="btn_two">
          <label for="check">
            <i className="fas fa-times"></i>
          </label>
        </div>
      <div className="menu">
        <ul>
          <li><i className="fas f-stream"></i>
            <a href="#."> Today's search</a>
          </li>
          <li>
            <i className="fas f-stream"></i>
            <a href="#."> Yesterday </a>
          </li>
          <li>
            <i className="fas f-stream"></i>
            <a href="#."> Last week </a>
          </li>
        
          <li>
          <i className="far fa-comments"></i>
            <a href="#."> Feedback</a>
          </li>
        </ul>
      </div>
      <div className="social_media">
        <ul>
        <a href="#."><i className="fab fa-facebook-f"></i></a>
          <a href="#."><i className="fab fa-twitter"></i></a>
          <a href="#."><i className="fab fa-instagram"></i></a>
          <a href="#."><i className="fab fa-youtube"></i></a>
        </ul>
      </div>
    </div>
  </div>
<div className='boddyy'>
  <div className="input-box">
      <i className="uil uil-search"></i>
      <input type="text" placeholder= " Ask AI here ..." />
      <button className="button">Search</button>
    </div>
    </div>
  
  </>
    
  );
}




export default aisb;