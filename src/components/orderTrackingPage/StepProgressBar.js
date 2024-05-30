import React, { useState, useEffect } from "react";
import "./StepProgressBar.css";

function StepProgressBar() {
  const orderDetails = [
    { name: "Order Processed", icon: "img/orderTrackingImg/CheckList.png" },
    { name: "Order Shipped", icon: "img/orderTrackingImg/Shipping.png" },
    { name: "Order Enroute", icon: "img/orderTrackingImg/Delivery.png" },
    { name: "Order Arrived", icon: "img/orderTrackingImg/Arrived.png" },
  ];

  const orderNumber = "12345";
  const expectedArrivalDate = "21/10/2021";
  const [currentStep, setCurrentStep] = useState(3);

  useEffect(() => {
    if (currentStep > orderDetails.length - 1) {
      setCurrentStep(orderDetails.length - 1);
    }
  }, [currentStep]);

  const progressBarWidth = `${
    ((currentStep + 1) / orderDetails.length) * 100
  }%`;

  return (
    <div className="StepProgressBar-container">
      <div className="details">
        <div className="order">
          <h1>
            {" "}
            Order <span>{orderNumber}</span>{" "}
          </h1>
        </div>
        <div className="date">
          <p>Expected Arrival {expectedArrivalDate}</p>
        </div>
      </div>
      <div className="track">
        <ul id="progress" className="track-text-center">
          {orderDetails.map((item, index) => (
            <li key={index} className={index <= currentStep ? "active" : ""}>
              <div className="progress-step"></div>
            </li>
          ))}
        </ul>
        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
      </div>
      <div className="lists">
        {orderDetails.map((item, index) => (
          <div
            key={index}
            className={`list ${index <= currentStep ? "active" : ""}`}
          >
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepProgressBar;
