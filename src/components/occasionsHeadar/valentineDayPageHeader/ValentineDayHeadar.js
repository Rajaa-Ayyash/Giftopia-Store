import './ValentineDayHeadar.css';
import React, { useState } from 'react';
import img1 from '../valentineDayPageHeader/valentineHeadarImg/v1-removebg-preview.png';
import img2 from '../valentineDayPageHeader/valentineHeadarImg/v2-removebg-preview.png';
import img3 from '../valentineDayPageHeader/valentineHeadarImg/v3-removebg-preview.png';

export default function ValentineDayHeader() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            content: "Have a great Valentine's Day",
            imgSrc: img1,
            offer: 'Special gift .. special person'
        },

        {
            content: "Have a great Valentine's Day",
            imgSrc: img2,
            offer: 'Upto 50% off'
        },

        {
            content: "Have a great Valentine's Day",
            imgSrc: img3,
            offer: "All kinds of gifts are available"
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
