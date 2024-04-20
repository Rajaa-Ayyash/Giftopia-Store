import React, { useState } from "react";
import "./EditModal.css";

export default function Modal ({closeEditModal , defaultValue , onSubmit}){
    const [formState, setFormState] = useState (defaultValue ||{
        orderID: "",
        productNumber: "",
        productTitle: "",
        status: "Processing",
        price: "",
        customerName: "",
        location: "",
        orderDate: "",
        dateDelivered: "",
    })

    function handleChange (e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

    function handleSubmit (e) {
        e.preventDefault();
        onSubmit(formState);
        closeEditModal();
    };

    return (
      <div className="edit-modal-container" onClick={(e)=>{if(e.target.className ==='edit-modal-container') closeEditModal()}}>
        <div className="edit-modal">
          <form>
            <div className="form-group">
              <label htmlFor="orderID">Order ID</label>
              <input name="orderID" onChange={handleChange} value={formState.orderID}/>
            </div>
            <div className="form-group">
              <label htmlFor="productNumber">Product Number</label>
              <input name="productNumber" onChange={handleChange} value={formState.productNumber} />
            </div>
            <div className="form-group">
              <label htmlFor="productTitle">Product Title</label>
              <input name="productTitle" onChange={handleChange} value={formState.productTitle} />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select name="status" onChange={handleChange} value={formState.status}>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed </option>
                <option value="Shipped">Shipped</option>
                <option value="Refunded">Refunded</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Failed">Failed</option>
              </select>
            </div >
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input name="price"  onChange={handleChange} value={formState.price} />
            </div>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input name="customerName" onChange={handleChange} value={formState.customerName} />
            </div>
            <div className="form-group">
              <label htmlFor="customerEmail">Customer Email</label>
              <input name="customerEmail" onChange={handleChange} value={formState.customerEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input name="location"  onChange={handleChange} value={formState.location}/>
            </div>
            <div className="form-group"> 
              <label htmlFor="orderDate">Order Date</label>
              <input name="orderDate" onChange={handleChange} value={formState.orderDate}/>
            </div>
            <div className="form-group">
              <label htmlFor="dateDelivered">Date Delivered</label>
              <input name="dateDelivered" onChange={handleChange} value={formState.dateDelivered} />
            </div>
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};
