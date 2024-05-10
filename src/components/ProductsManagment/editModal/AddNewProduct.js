import React, { useState } from "react";
import "./EditModal.css";

export default function AddProduct ({closeEditModal , defaultValue , onSubmit}){

    const [formState, setFormState] = useState (defaultValue ||{
        productID: "",
        productNumber: "",
        productDiscription: "",
        productTitle: "",
        price: "",
        productOccasion: "",
        imgURL: "",
        sourceURL: ""
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
              <label htmlFor="productDiscription">Product Discription</label>
              <input name="productDiscription" onChange={handleChange} value={formState.productDiscription} />
            </div>
            <div className="form-group">
              <label htmlFor="productTitle">Product Title</label>
              <input name="productTitle" onChange={handleChange} value={formState.productTitle} />
            </div>
            <div className="form-group">

            </div >
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input name="productPrice"  onChange={handleChange} value={formState.productPrice} />
            </div>
            <div className="form-group">
              <label htmlFor="productOccasion">Product Occasion</label>
              <input name="productOccasion" onChange={handleChange} value={formState.productOccasion} />
            </div>
            <div className="form-group">
              <label htmlFor="imgURL">Product ImgURL</label>
              <input name="imgURL" onChange={handleChange} value={formState.imgURL} />
            </div>
            <div className="form-group">
              <label htmlFor="SourceURL">Product SourceURL</label>
              <input name="SourceURL"  onChange={handleChange} value={formState.SourceURL}/>
            </div>
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};