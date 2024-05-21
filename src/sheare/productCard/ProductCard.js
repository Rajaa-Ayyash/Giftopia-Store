// import React, { useState } from 'react';
// import './ProductCard.css'

// export default function ProductCard(props) {


//   return (
//     <>
//       {/* card */}
      
     










//     </>

//   )
// }

import React from 'react'
import './productCard.css'

export default function ProductCard(props) {
  return (
<div className='col-12 col-sm-6 col-md-4 col-lg-3  mt-5'>
      <div className="card">
        {/* <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$" className="card-img-top product-image" alt="flowers" /> */}
        <img src={props.img} className="card-img-top product-image" alt="flowers" />

        <div className="card-body ">
          <h5 className="card-title text-center">{props.name}</h5>
          <div className='d-flex justify-content-between'>
          {/* <button className="bg-warning border-0  mt-3 text-hite add-cart-btn ">
            
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#63E6BE" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </button> */}
          {/* <button className='ccd'>+</button> */}
          <button className='cc border-0 ms-2 mt-1'>
            {/* <p className='text-center'></p> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z " className='ms-auto'/></svg>
          </button>
       
          <div className="star-rating ">
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512"><path fill="#f6bd60" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512"><path fill="#f6bd60" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512"><path fill="#f6bd60" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512"><path fill="#f6bd60" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512"><path fill="#f6bd60" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
          </div>

          </div>

          <div className='parent'>

          </div>
          <div className="border-top mt-4">
            {/* <span className="price">$200</span> */}
            <div className='d-flex justify-content-between'>
              <div>
                <span className="productPrice">{props.price}</span>
                <span className="discount-price">$100</span>
              </div>
              <p className="">
            <span className="stock">25104 in stock</span>
          </p>
             
            </div>
            {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}


          </div>



         
        </div>
      </div>

      </div>  )
}
