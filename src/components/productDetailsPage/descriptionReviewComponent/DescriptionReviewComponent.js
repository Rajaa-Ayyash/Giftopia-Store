import React, { useState } from 'react';
import './DescriptionReviewComponent.css';
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
                {activeTab === 'reviews' && <div>Null</div>}
            </div>
        </div>
    );
};


