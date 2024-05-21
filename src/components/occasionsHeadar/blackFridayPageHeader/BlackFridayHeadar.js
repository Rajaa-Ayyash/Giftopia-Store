import './BlackFridayHeadar.css';
import React, { useState } from 'react';
import img1 from '../blackFridayPageHeader/blackFridayHeadarImg/b1-removebg-preview.png';
import img2 from '../blackFridayPageHeader/blackFridayHeadarImg/b2-removebg-preview.png';
import img3 from '../blackFridayPageHeader/blackFridayHeadarImg/b3-removebg-preview.png';


export default function BlackFridayHeadar() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            content: "It's the black friday",
            imgSrc: img1,
            offer: 'The best offers of the year'
        },

        {
            content: "It's the black friday",
            imgSrc: img2,
            offer: 'Offers upto 60%'
        },

        {
            content: "It's the black friday",
            imgSrc: img3,
            offer: 'sales on all our gifts '
        },
    ];

    const nextSlide = () => {
        setIndex((index + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + slides.length) % slides.length);
    };

    return (
        <>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
            <nav></nav>
            <section className="home" id="home">
                <div className="slides-container">
                    {slides.map((slide, i) => (
                        <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
                            <div className="content">
                                <span>{slide.content}</span>
                                <h3>{slide.offer}</h3>
                                <a href="#." className="btn">Book Now</a>
                            </div>
                            <div className="img">
                                <img decoding="async" src={slide.imgSrc} alt="Valentine's Day Offer" />
                            </div>
                        </div>
                    ))}
                </div>
                <div id="next-slide" className="fas fa-angle-right" onClick={nextSlide}></div>
                <div id="prev-slide" className="fas fa-angle-left" onClick={prevSlide}></div>
            </section>
        </>
    );
}
