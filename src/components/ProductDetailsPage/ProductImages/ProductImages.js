import React, { useState } from "react";
import "./ProductImages.css"

export default function ProductImages ({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-images">
      <div className="sub-images">
        {images.map((curElm, index) => {
          return (
            <figure className="product-image-figure">
              <img className="product-image"
                src={curElm.url}
                alt={curElm.filename}
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
  );
};

