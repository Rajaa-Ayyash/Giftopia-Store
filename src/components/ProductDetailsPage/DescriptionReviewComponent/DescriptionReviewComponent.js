import React, { useState } from 'react';
import './DescriptionReviewComponent.css';
<<<<<<< HEAD
//import ViewRatings from '../../rating/ViewRatings'
=======
import ViewRatings from '../../rating/ViewRatings'
>>>>>>> b1c2870248ad3bb7b646319cc5b88be21101cb55
export default function DescriptionReviewComponent ({description , reviews}) {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="description-review-container">
            <div className="buttons-container">
                <button className={activeTab === 'description' ? 'active' : ''} onClick={() => handleTabClick('description')}>Description</button>
                <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => handleTabClick('reviews')}>Reviews</button>
            </div>
            <div className="content">
                {activeTab === 'description' && 
                <div className='description'>
                    <h3 className='description-header'>Description</h3>
                    <div>{description}</div>
                </div>}

<<<<<<< HEAD
                {activeTab === 'reviews' &&
                // <ViewRatings/>
                 <div className='reviews'>
                    <h3 className='reviews-header'>Reviews</h3>
                    <div>{reviews}</div>
                </div>}
=======
                {activeTab === 'reviews' && <ViewRatings/>}
>>>>>>> b1c2870248ad3bb7b646319cc5b88be21101cb55
            </div>
        </div>
    );
};


