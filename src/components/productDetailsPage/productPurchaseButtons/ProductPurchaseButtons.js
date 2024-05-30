
import AddToCart from "./addToCart/AddToCart";
import React, { useState } from "react";
import "./ProductPurchaseButtons.css";

export default function ProductPurchaseButtons ({authToken,productId,stock}){
    const [amount, setAmount] = useState(1);

    const decrease = () => {
      setAmount(prevAmount => (prevAmount > 1 ? prevAmount - 1 : 1));
    };
  
    const increase = () => {
      setAmount(prevAmount => (prevAmount < stock ? prevAmount + 1 : stock));
    };
    return(
        <div className="all-buttons">
            <AddToCart authToken={authToken} productId={productId}/>
        </div>
    );
};


