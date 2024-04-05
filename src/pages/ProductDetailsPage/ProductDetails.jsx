import React from "react";
import "./ProductDetails.css"
import ProductImages from "./ProductImages/ProductImages";
import ProductRating from "./ProductRating/ProductRating";
import ProductPrice from "./ProductPrice/ProductPrice";
import DescriptionReviewComponent from "./DescriptionReviewComponent/DescriptionReviewComponent";
import ProductPurchaseButtons from "./ProductPurchaseButtons/ProductPurchaseButtons";
import m from "./ProductImages/Images/dd.png";
import s1 from "./ProductImages/Images/s1.jpg";
import s2 from "./ProductImages/Images/s2.jpg";
import s3 from "./ProductImages/Images/s3.jpg";


export default function ProductDetails(){
    
    const images = [
        { url: m, filename: "m.jpg" },
        { url: s1, filename: "s1.jpg" },
        { url: s2, filename: "s2.jpg" },
        { url: s3, filename: "s3.jpg" },
    ];
    const name ='LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR';
    const rating=[4.7,21671];
    const stock = 10;
    const availabilityClass = { color: stock > 0 ? 'green' : 'red'}
    const company = 'LG';
    const price = {currentPrice: '1699', oldPrice: '1999' };
    const description =`The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've
tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out
for its value because it has many gaming-oriented features that are great for gamers.

Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
65C2 Stand model is at a minimum 39% lighter than the C1 series.
The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.`;


    return (
        <div className="main-container">
            <div className="product-page-nav-bar">
                <h1 className="brand-name">Giftopia</h1>
            </div>
            <div className="product-page-body">
                <div className="product-details">
                    <div className="product-review">
                        <ProductImages images={images}></ProductImages>
                    </div>
                    <div className="product-content">
                        <ProductRating rating={rating[0]} feedbacksNumber={rating[1]} />
                        <div className="product-title">{name}</div>
                        <div className="product-content-info">
                            <p>
                                Available: <span style={availabilityClass}>{stock > 0 ? 'In Stock' : 'Not Available'}</span>
                            </p>
                            <p>
                                Brand :<span> {company} </span>
                            </p>
                        </div>
                        <p className="product-content-price">
                            <ProductPrice currentPrice={price.currentPrice} oldPrice={price.oldPrice}/>
                        </p>
                        <ProductPurchaseButtons stock={stock}/>
                    </div>
                </div>
                <div className="product-information-reviews">
                    <DescriptionReviewComponent description={description} reviews={'NULL'}/>
                </div>
            </div>
        </div>
    );
};
