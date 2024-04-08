import React from 'react'
import { useForm } from 'react-hook-form'
import './AddNewAdmin.css'


function AddNewAdmin() {
  

   const form = useForm();
   const {register , handleSubmit} = form;
   
   const onSubmit = data => {
    console.log(data);
   };
  
  return (
  <div classname="container">
    
    <form className='form-add-admin' onSubmit={handleSubmit(onSubmit)}>
    <span className='span-admin'>New Admin</span>
      <div classname="form-row">
          <div classname="input-box">
            <input type="text" id="username" {...register("username")}  required="required" placeholder='username'/>
            <br />
          </div>

          <div classname="input-box">
            <input type="email" id="email" {...register("email")} required="required" placeholder='Email'/>
            <br />
          </div>

          <div classname="input-box">
            <input type="password" id="password" {...register("password")} required="required" placeholder='password'/>
            <br />
          </div>

          <div classname="input-box">
            <input type="password" id="password" {...register("password")} required="required" placeholder='confirm password'/>
            <br />
          </div>
          <button className='bt-AddAdmin'>Add Admin</button>
      </div></form>
  </div>
  )
}

export default AddNewAdmin