import React, { useState } from "react";
import axios from 'axios';
import "./EditModal.css";
import cookies from 'cookie-universal';

export default function AddProduct({ closeEditModal, defaultValue, onSubmit }) {

  const myCookies = cookies();
  const token = myCookies.get('GiftopiaToken');

  const x = `Giftopia__${token}`;

  const [formState, setFormState] = useState(defaultValue || {
    name: "",
    description: "",
    stock: "",
    price: "",
    discount: "",
    sizez: "",
    colors: "",
    categoryId: "",
    subcategoryId: "",
    mainImage: null,
    subImages: []
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleFileChange(e) {
    setFormState({ ...formState, mainImage: e.target.files[0] });
  }

  function handleSubImagesChange(e) {
    setFormState({ ...formState, subImages: Array.from(e.target.files) });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(formState).forEach(key => {
      if (key === 'subImages') {
        formState.subImages.forEach((file, index) => {
          formData.append('subImages', file); // 
        });
      } else {
        formData.append(key, formState[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:6060/product', formData, {
        headers: {
          'Authorization': x,
        }
      });

      onSubmit(response.data);
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }

    closeEditModal();
  }

  return (
    <div className="edit-modal-container" onClick={(e) => { if (e.target.className === 'edit-modal-container') closeEditModal() }}>
      <div className="edit-modal">
        <form>

          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input name="description" onChange={handleChange} value={formState.description} />
          </div>
         
          <div className="form-group">
            <label htmlFor="stock">Products In Stock</label>
            <input name="stock" onChange={handleChange} value={formState.stock} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Product Price</label>
            <input name="price" onChange={handleChange} value={formState.price} />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Product Discount</label>
            <input name="discount" onChange={handleChange} value={formState.discount} />
          </div>
         
          <div className="form-group">
            <label htmlFor="sizez">Product Size</label>
            <select name="sizez" onChange={handleChange} value={formState.sizez}>
              <option value="">Select Size</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">X-Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="colors">Product Colors</label>
            <input name="colors" onChange={handleChange} value={formState.colors} />
          </div>
          <div className="form-group">
            <label htmlFor="categoryId">Category ID</label>
            <input name="categoryId" onChange={handleChange} value={formState.categoryId} />
          </div>
          <div className="form-group">
            <label htmlFor="subcategoryId">Subcategory ID</label>
            <input name="subcategoryId" onChange={handleChange} value={formState.subcategoryId} />
          </div>
          <div className="form-group">
            <label htmlFor="mainImage">Main Image</label>
            <input name="mainImage" type="file" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="subImages">Sub Images</label>
            <input name="subImages" type="file" multiple onChange={handleSubImagesChange} />
          </div>
          <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}
