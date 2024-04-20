import React from "react";
import "./CustomerInformation.css";

const CustomerInformation = () => {
  const customer = {
    name: "Rajaa Ayyash",
    email: "rajaaayyash43@gmail.com",
    phone: "0569283787",
    billingAddress: {
      street: " street",
      city: "Salfit",
      country: "Palestine",
      villageOrNeighborhood: "Marda",
    },
    shippingAddress: {
      country: "Palestine",
      city: "Nablus",
      villageOrNeighborhood: "Rafidiya ",
      street: "street",
    },
  };

  return (
    <div className="customer-info-container">
      <h2 className="Title-Info">Customer information</h2>
      <div className="addresses">
        <div className="address billing">
          <h3>Billing address</h3>
          <p>{customer.name}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
          <p>{customer.billingAddress.country}</p>
          <p>{customer.billingAddress.city}</p>
          <p>{customer.billingAddress.villageOrNeighborhood}</p>
          <p>{customer.billingAddress.street}</p>
        </div>
        <div className="address shipping">
          <h3>Shipping address</h3>
          <p>{customer.name}</p>
          <p>{customer.phone}</p>
          <p>{customer.shippingAddress.country}</p>
          <p>{customer.shippingAddress.city}</p>
          <p>{customer.shippingAddress.villageOrNeighborhood}</p>
          <p>{customer.shippingAddress.street}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
