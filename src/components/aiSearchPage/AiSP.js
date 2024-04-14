import React, { useState, useEffect } from 'react';
import './AiSPD.css';



const AiSP = () => {



  const [data, setData] = useState(null); // State to store fetched data
  const [query, setQuery] = useState(''); // State to store user query

  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to your backend endpoint
        const response = await fetch('.../aiSearchPage/DataTest'); // Replace '/api/data' with your actual endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Extract JSON data from the response
        const jsonData = await response.json();
        setData(jsonData); // Update the state with fetched data
      } catch (error) {

        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      <div>
        {/* Display fetched data */}
        {data && <p>{data.message}</p>}
      </div>
    };
  }, ); 
  
  // Empty dependency array ensures that the effect runs only once after the initial render



  // Function to handle search button click
  const handleSearch = () => {
    // Perform any action you want when the search button is clicked
    console.log('Search button clicked');
    // You can use the 'query' state to get the user input
    console.log('User query:', query);
  };


  return (

    <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />

      <div className='r'>
        <div className="main_box" >
          <input type="checkbox" id="check"></input>
          <div className="btn_one">
            <label htmlFor="check">
              <i className="fas fa-bars"></i>
            </label>
          </div>
          <div className="sidebar_menu">
            <div className="logo">
              <a href="#.">Giftopia</a>
            </div>
            <div className="btn_two">
              <label htmlFor="check">
                <i className="fas fa-times"></i>
              </label>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <i className="fas f-stream"></i>
                  <a href="#.">Today's search</a>
                </li>
                <li>
                  <i className="fas f-stream"></i>
                  <a href="#.">Yesterday </a>
                </li>
                <li>
                  <i className="fas f-stream"></i>
                  <a href="#.">Last week </a>
                </li>

                <li>
                  <i className="far fa-comments"></i>
                  <a href="#.">Feedback</a>
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
      </div>
      <div className='boddyy'>
        <div className="input-box">
          <i className="uil uil-search"></i>
          <input
            type="text"
            placeholder="Ask AI here ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </>

  )
};

export default AiSP;