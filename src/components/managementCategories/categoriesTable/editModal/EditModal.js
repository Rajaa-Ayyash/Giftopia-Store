import React, { useState } from "react";
import "./EditModal.css";

export default function EditModal ({closeEditModal , defaultValue , onSubmit}){
    const [formState, setFormState] = useState (defaultValue ||{
        categoryName: "",
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
              <label htmlFor="categoryName">Category Name</label>
              <input name="categoryName" onChange={handleChange} value={formState.categoryName}/>
            </div>
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};
