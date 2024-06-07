import React, { useState, useEffect } from "react";
import "./CartPage.css";
import "./AnimatedButton.css";
import AnimatedTruckButton from "./AnimatedButton.js";
import { MdDelete } from "react-icons/md";
import cookies from 'cookie-universal';
import axios from "axios";

function CartItem({
  productId,
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
            className="mini-img mt-3"
          />
        </div>
      </td>
      <td className="product-title">
        <a href="#" className="cart-link fw-bold">
          {title}
        </a>
        <p className="product-description">
          {description.length > 20 ? description.substring(0, 20) + '...' : description}
        </p>
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
          <div onClick={() => onRemoveItem(productId)}>
            <MdDelete />
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
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0.0);

  const myCookies = cookies();
  const token = myCookies.get('GiftopiaToken');
  const x = `Giftopia__${token}`;

  const removeProductFromCart = async (productId) => {
    try {
      await axios.put(
        `http://localhost:6060/cart/${productId}`,
        {},
        {
          headers: {
            'Authorization': x,
          },
        }
      );
      setCartItems((currentItems) => currentItems.filter(item => item.message._id !== productId));
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get('http://localhost:6060/cart', {
          headers: {
            'Authorization': x,
          },
        });

        const cartItems = response.data.product;

        const detailedCartItems = [];

        for (const item of cartItems) {
          try {
            const productResponse = await axios.get(`http://localhost:6060/product/${item.productId}`, {
              headers: {
                'Authorization': x,
              },
            });
            const detailedItem = {
              ...productResponse.data,
              quantity: item.quantity,
            };
            detailedCartItems.push(detailedItem);
          } catch (error) {
            console.error(`Error fetching details for product ID ${item.productId}:`, error);
          }
        }

        setCartItems(detailedCartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getProduct();
  }, [token]);

  const handleQuantityChange = (title, newQuantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.message.name === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    removeProductFromCart(productId);
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === "Giftoo") {
      setDiscount(20.0);
    } else {
      setDiscount(0.0);
    }
  };

  const isCartEmpty = cartItems.length === 0;
  const shippingCost = 20.0;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.message.finalPrice * item.quantity,
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
                    item.message.mainImage && item.message.mainImage.secure_url && (
                      <CartItem
                        key={item.message._id}
                        productId={item.message._id}
                        imageUrl={item.message.mainImage.secure_url}
                        title={item.message.name}
                        description={item.message.description}
                        price={item.message.finalPrice}
                        quantity={item.quantity}
                        onQuantityChange={handleQuantityChange}
                        onRemoveItem={handleRemoveItem}
                      />
                    )
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-total col-lg-5 col-md-12 col-12 mt-5">
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

                  <button className="Apply-discount-btn" onClick={applyDiscount}>
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
