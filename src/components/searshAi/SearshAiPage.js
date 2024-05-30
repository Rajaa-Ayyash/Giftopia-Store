import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import './searshAiPage.css'
import cookies from 'cookie-universal';
import Nav from '../nav/Nav.js';


export default function SearshAiPage() {

  const myCookies = cookies();
  const token = myCookies.get('GiftopiaToken')


  const x = `Giftopia__${token}`



    const [text, setText] = useState(''); 
    const textRef = useRef(null); 

    const handleTextChange = () => {
      setText(textRef.current.innerText);
    };
  
    const sendToApi = async () => {
      if (!text) {
        alert("No text to send");
        return;
      }
      try {
        const response = await axios.post('http://localhost:6060/searchGift/sendData', {
          userReq: text,
        },{
          headers: {
            'Authorization': x
          }

        });
        alert('Response from API:', response.data);
        alert('Data sent successfully!');
        window.location.pathname = '/RecumentideProduct'

   
      } catch (error) {
        alert('Error:', error);
        alert('Error sending data to the API.');
      }


    };

  return (
    


    <div>
      <Nav />
        <div className='centerContainer'>
      <div contentEditable className="board" ref={textRef} onInput={handleTextChange} >
        <p>Find the Ideal Gift for Your Loved Ones ⇦</p>
        <p>Today is 🎁</p>
        <p><u>expressing your feelings in a unique way</u></p>
      </div>
    </div>
    <button onClick={sendToApi}>clock</button>

    </div>
  )
}
