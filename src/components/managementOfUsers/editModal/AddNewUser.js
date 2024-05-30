import React, { useState } from "react";
import "./EditModal.css";

export default function AddNuser ({closeAddNuser , defaultValue , onSubmit}){
    const [formState, setFormState] = useState (defaultValue ||{
        userID: "",
        userName: "",
        userEmail:"",
        location: ""
  
    })

    function handleChange (e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

    function handleSubmit (e) {
        e.preventDefault();
        onSubmit(formState);
        closeAddNuser();
    };

    return (
      <div className="edit-modal-container" onClick={(e)=>{if(e.target.className ==='edit-modal-container') closeAddNuser()}}>
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
              <label htmlFor="location">Location</label>
              <input name="location"  onChange={handleChange} value={formState.location}/>
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input name="location"  onChange={handleChange} value={formState.Password}/>
            </div>
            
          
            <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
};
