import React, { useState } from "react";
import "./EditModal.css";

export default function AddProduct({ closeEditModal, defaultValue, onSubmit }) {

  const [formState, setFormState] = useState(defaultValue || {
    productID: "",
    productNumber: "",
    productName: "",
    productDiscription: "",
    inStock: "",
    price: "",
    discount: "",
    finalPrice: "",
    size: "",
    colors: "",
    imgURL: ""
  })

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formState);
    closeEditModal();
  };

  return (
    <div className="edit-modal-container" onClick={(e) => { if (e.target.className === 'edit-modal-container') closeEditModal() }}>
      <div className="edit-modal">
        <form>
          <div className="form-group">
            <label htmlFor="productNumber">Product Number</label>
            <input name="productNumber" onChange={handleChange} value={formState.productNumber} />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input name="productName" onChange={handleChange} value={formState.productName} />
          </div>
          <div className="form-group">
            <label htmlFor="productDiscription">Product Discription</label>
            <input name="productDiscription" onChange={handleChange} value={formState.productDiscription} />
          </div>
          <div className="form-group">
            <label htmlFor="inStock">Products In Stock</label>
            <input name="inStock" onChange={handleChange} value={formState.inStock} />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input name="productPrice" onChange={handleChange} value={formState.productPrice} />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Product Discount</label>
            <input name="discount" onChange={handleChange} value={formState.discount} />
          </div >
          <div className="form-group">
            <label htmlFor="finalPrice">Product Final Price</label>
            <input name="finalPrice" onChange={handleChange} value={formState.finalPrice} />
          </div>
          <div className="form-group">
            <label htmlFor="size">Product Size</label>
            <input name="size" onChange={handleChange} value={formState.size} />
          </div>
          <div className="form-group">
            <label htmlFor="colors">Product Colors</label>
            <input name="colors" onChange={handleChange} value={formState.colors} />
          </div>
          <div className="form-group">
            <label htmlFor="imgURL">Product ImgURL</label>
            <input name="imgURL" onChange={handleChange} value={formState.imgURL} />
          </div>
          <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
};