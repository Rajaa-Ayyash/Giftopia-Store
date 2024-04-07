import React, { useState } from "react";
import "./CartPage.css";
import "./AnimatedButton.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AnimatedTruckButton from "./AnimatedButton.js";

function CartItem({
  imageUrl,
  title,
  description,
  price,
  quantity,
  onQuantityChange,
  onRemoveItem,
}) {
  const incrementQuantity = () => {
    onQuantityChange(title, quantity + 1);
  };

  const decrementQuantity = () => {
    onQuantityChange(title, Math.max(quantity - 1, 0));
  };

  return (
    <tr className="CartPage">
      <td className="mini-img-cart mt-10">
        <div className="mini-img-container">
          <img
            src={imageUrl}
            style={{ width: "100px", height: "auto" }}
            alt=""
            className="mini-img mt-3 "
          />
        </div>
      </td>
      <td className="product-title">
        <a href="#" className="cart-link fw-bold">
          {title}
        </a>
        <p>{description}</p>
      </td>
      <td>
        <div className="quantity-btn-container">
          <button className="button-cart" onClick={decrementQuantity}>
            -
          </button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            readOnly
          />
          <button className="button-cart" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <div className="remove-btn-container">
          <div onClick={() => onRemoveItem(title)}>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </td>
      <td>
        <p>${(price * quantity).toFixed(2)}</p>
      </td>
    </tr>
  );
}

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      imageUrl: "img/cart-img/gift2.webp",
      title: "Breathing otter",
      description: "Musical otter plush sound machine with “breathing” motion ",
      price: 100.0,
      quantity: 1,
    },
    {
      imageUrl: "img/cart-img/gift3.jpg",
      title: "Bright moon",
      description: "Diameter 18 cm  - Distinctive lighting 16 RGB colors",
      price: 50.0,
      quantity: 1,
    },
    {
      imageUrl: "img/cart-img/gift1.jpeg",
      title: "Iphone 12 pro max",
      description: "128GB - Graphite (Unlocked)",
      price: 1000.0,
      quantity: 1,
    },
    {
      imageUrl: "img/cart-img/gift4.webp",
      title: "Photo stand",
      description: "7inch (13x18cm)",
      price: 350.0,
      quantity: 1,
    },
  ]);

  const [discountCode, setDiscountCode] = useState(""); 
  const [discount, setDiscount] = useState(0.0); 

  const handleQuantityChange = (title, newQuantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (title) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.title !== title)
    );
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === "Giftoo") {
      const discountAmount = 20.0;
      setDiscount(discountAmount);
    } else {
      setDiscount(0.0);
    }
  };

  const isCartEmpty = cartItems.length === 0;
  const shippingCost = 20.0;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalWithShipping = totalPrice + shippingCost - discount; 

  return (
    <div className="CartPage mt-5 ">
      <div className="product-cart mt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 col-xxl-7">
              <table className="cart-table w-100">
                <thead>
                  <tr className="border-bottom fs-4">
                    <th>Product</th>
                    <th />
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.title}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      quantity={item.quantity}
                      onQuantityChange={handleQuantityChange}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-total col-lg-5 col-md-12 col-12 mt-5" >

              <h2>Cart Totals</h2>
              <div className="cart-total-information mt-4">
                <div className="Subtotals d-flex justify-content-between mb-2">
                  <p className="subtotals fw-bold">Subtotals:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="Shipping d-flex justify-content-between mb-2">
                  <p className="shipping fw-bold">Shipping:</p>
                  <p>${shippingCost.toFixed(2)}</p>
                </div>
                <div className="Discount d-flex justify-content-between">
                  <p className="discount fw-bold">Discount:</p>
                  <p>${discount.toFixed(2)}</p>
                </div>

                <div className="discount-code-container">
                  <input
                    type="text"
                    className="discount-input"
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    autoComplete="off"
                  />

                  <button
                    className="Apply-discount-btn"
                    onClick={applyDiscount}
                  >
                    Apply
                  </button>
                </div>
                <hr />
                <div className="Total-cost d-flex justify-content-between">
                  <p className="total-cost fw-bold">Total:</p>
                  <p>${totalWithShipping.toFixed(2)}</p>
                </div>

                <div className="Cart-description">
                  <span className="note fw-light">
                    Shipping & taxes calculated at checkout
                  </span>
                </div>

                <div className="animated-button-container">
                  {!isCartEmpty && <AnimatedTruckButton />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
