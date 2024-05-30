import React, { useState } from "react";
import "./EditModal.css";

export default function EditModal ({closeEditModal , defaultValue , onSubmit}){
    const [formState, setFormState] = useState (defaultValue ||{
        userID: "",
        userName: "",
        userEmail:"",
        password:"",
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
              <label htmlFor="userID">User ID</label>
              <input name="userID" onChange={handleChange} value={formState.userID} />
            </div>
           
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input name="userName" onChange={handleChange} value={formState.userName} />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail">User Email</label>
              <input name="userEmail" onChange={handleChange} value={formState.userEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password"  onChange={handleChange} value={formState.password}/>
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
