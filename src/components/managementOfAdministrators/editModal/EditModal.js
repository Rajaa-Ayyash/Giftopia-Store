import React, { useState } from "react";
import "./EditModal.css";

export default function EditModal ({closeEditModal , defaultValue , onSubmit}){
    const [formState, setFormState] = useState (defaultValue ||{
        adminID: "",
        adminName: "",
        adminEmail:"",
        location: ""
  
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
              <label htmlFor="adminID">Admin ID</label>
              <input name="adminID" onChange={handleChange} value={formState.adminID} />
            </div>
           
            <div className="form-group">
              <label htmlFor="adminName">Admin Name</label>
              <input name="adminName" onChange={handleChange} value={formState.adminName} />
            </div>
            <div className="form-group">
              <label htmlFor="adminEmail">Admin Email</label>
              <input name="adminEmail" onChange={handleChange} value={formState.adminEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input name="location"  onChange={handleChange} value={formState.location}/>
            </div>
            
          
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};
