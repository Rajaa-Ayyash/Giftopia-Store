import React, { useState, useEffect } from 'react';
import './HeadarD.css';

/*This code written by Reema Kusa*/
const Slider = () => {
  const [active, setActive] = useState(0);
  const sliderItems = [
    {
      id: 1,
      title: 'Gifts for everyone',
      content: 'We provide you with gifts that suit all ages, genders, occasions, and interests',
    },
    {
      id: 2,
      title: 'The best prices',
      content: 'Get the most unique gifts at the best prices and highest quality',
    },
    {
      id: 3,
      title: 'Shop from where Uare',
      content: 'Shop in the easiest, fastest, and most enjoyable way possible, with the possibility of delivery',
    },
  ];

  const nextSlide = () => {
    setActive((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <main >
      <div className='headerr'>
      <header></header>
      </div>
      <section className="slider">
        <div className="list">
          {sliderItems.map((item, index) => (
            <div key={item.id} className={`item ${index === active ? 'active' : ''}`}>
              <div className="image"></div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
          <button id="next" onClick={nextSlide}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>

  );
};

export default Slider;