import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderSchedule.css";

function OrderTable() {
  const [orders, setOrders] = useState([
    {
      imageUrl: "img/orderTrackingImg/gift2.webp",
      title: "Breathing otter",
      description: "Musical otter plush sound machine with “breathing” motion",
      price: 100.0,
      quantity: 1,
      id: 1,
    },
    {
      imageUrl: "img/orderTrackingImg/gift3.jpg",
      title: "Bright moon",
      description: "Diameter 18 cm - Distinctive lighting 16 RGB colors",
      price: 50.0,
      quantity: 1,
      id: 2,
    },
    {
      imageUrl: "img/orderTrackingImg/gift1.jpeg",
      title: "iPhone 12 Pro Max",
      description: "128GB - Graphite (Unlocked)",
      price: 1000.0,
      quantity: 1,
      id: 3,
    },
    {
      imageUrl: "img/orderTrackingImg/gift4.webp",
      title: "Photo stand",
      description: "7inch (13x18cm)",
      price: 350.0,
      quantity: 1,
      id: 4,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const getTotalCost = () => {
    return orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0
    );
  };

  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="order-table-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ float: "right", margin: "10px" }}
        />
      </div>
      <h1 className="Your-Order">Your Order</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              <td data-label="#">{index + 1}</td>
              <td data-label="Product">
                <Link to={`/product/${order.id}`}>
                  <img
                    src={order.imageUrl}
                    alt={order.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                </Link>
              </td>
              <td data-label="Product Name">
                <Link to={`/product/${order.id}`}>{order.title}</Link>
              </td>
              <td data-label="Description">{order.description}</td>
              <td data-label="Quantity">{order.quantity}</td>
              <td data-label="Price">${order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-cost">
        <h2>Total Cost: ${getTotalCost().toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default OrderTable;
