import React, { useState } from "react";
import "./AddNewModal.css";

export default function AdNewModal ({closeAddNewModal  , onSubmit}){
    const [categoryName, setCategoryName] = useState (" ")

    function handleChange (e) {
        setCategoryName(e.target.value);
      };

    function handleSubmit (e) {
        e.preventDefault();
        onSubmit(categoryName);
        closeAddNewModal();
    };

    return (
      <div className="add-new-modal-container" onClick={(e)=>{if(e.target.className ==='add-new-modal-container') closeAddNewModal()}}>
        <div className="add-new-modal">
          <form>
            <div className="form-group">
              <label htmlFor="categoryName">Category Name</label>
              <input name="categoryName" onChange={handleChange}/>
            </div>
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};
