import "./ProductPrice.css";

export default function ProductPrice ({ currentPrice, oldPrice }) {
    const discount = (currentPrice, oldPrice) => {
        if (oldPrice <= 0) {
            return 0; 
        }
        const discountAmount = oldPrice - currentPrice;
        const discountPercentage = (discountAmount / oldPrice) * 100;
        return discountPercentage.toFixed(2);
    };
    return (
        <div className="product-price">
            <div className="currentPrice">{currentPrice}$</div>
                {oldPrice > currentPrice &&(
                    <div className="moreInfo">
                        <div className="oldPrice">{oldPrice}$</div>
                        <div className="discount">
                            {discount(currentPrice, oldPrice)}% OFF
                        </div>
                    </div>
                )}
        </div>
    )
};

