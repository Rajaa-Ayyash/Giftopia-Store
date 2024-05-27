import React, { useEffect, useState } from "react";
import "./ProductDetails.css"
import ProductImages from "../productDetailsPage/productImages/ProductImages"
import ProductRating from "./productRating/ProductRating";
import ProductPrice from "./productPrice/ProductPrice";
import DescriptionReviewComponent from "./descriptionReviewComponent/DescriptionReviewComponent";
import ProductPurchaseButtons from "./productPurchaseButtons/ProductPurchaseButtons";
import axios from 'axios';
import Cookie from 'cookie-universal'



export default function ProductDetails({productID}){
    const [productId, setProductId]=useState(productID);
    const [product, setProduct] = useState('')
    const [errorBack,setErrorBack]=useState('');
    const cookie = Cookie();
    const authToken = cookie.get('GiftopiaToken');
    const availabilityClass = { fontWeight: 'bold', color: product.stock > 0 ? '#2DB224' : '#FF0A0A'}

useEffect(() => {
    getProductById();
  }, [productId]);

async function getProductById(){
    try {
        const response = await axios.get(`http://localhost:6060/product/${productId}`,{
            headers: {
              Authorization: authToken
            },
          });
        setProduct(response.data.message);
      } catch (error) {
        setErrorBack(error.response.data.message)
      }
}

    return (
        <div className="main-container">
            <div className="product-page-nav-bar">
                
            </div>
            <div className="product-page-body">
                <div className="product-details">
                        <div className="product-review">
                            <ProductImages mainImage={product.mainImage} subImages={product.subImages}></ProductImages>
                        </div>
                        <div className="product-content">
                            
                            <div className="product-title">{product.name}</div>
                            <div className="product-content-info">
                                <div>
                                    Available: <span style={availabilityClass}>{product.stock > 0 ? 'In Stock' : 'Not Available'}</span>
                                </div>
                            </div>
                            <div className="product-content-price">
                                <ProductPrice currentPrice={product.finalPrice} oldPrice={product.price}/>
                            </div>
                            <ProductPurchaseButtons authToken={authToken} productId={productId} stock={product.stock}/>
                        </div>
                </div>
                <div className="product-information-reviews">
                    <DescriptionReviewComponent description={product.description} reviews={'NULL'}/>
                </div>
            </div>
        </div>
    );
};


//<ProductRating rating={rating[0]} feedbacksNumber={rating[1]} />
/*
<div>
    Brand :<span style={{fontWeight: 'bold' , color:"#111"}}> {company} </span>
</div>
*/
