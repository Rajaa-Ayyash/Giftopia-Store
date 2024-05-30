import React, { useState , useEffect } from "react";
import "./ProductImages.css";

export default function ProductImages({ mainImage, subImages }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (mainImage && mainImage.secure_url) {
      setImage(mainImage.secure_url);
    }
  }, [mainImage]);

  return (
    <div className="product-images">
      {subImages != undefined && 
      <div className="sub-images">
        {subImages.map((subImage) => (
          <figure key={subImage.public_id} className="product-image-figure">
            <img
              className="product-image"
              src={subImage.secure_url}
              alt={subImage.public_id}
              onClick={() => setImage(subImage.secure_url)}
            />
           
          </figure>
        ))}
      </div>}
      <div className="main-screen">
        <img src={image} alt="Main product" />
      </div>
    </div>
  );
}