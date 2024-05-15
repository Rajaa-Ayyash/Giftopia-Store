import React,{useState} from "react";
import './LoginForm.css'
import axios from 'axios';

export default function LoginForm (){
    const [errorBack,setErrorBack]=useState('')
    const[passwordVisible,setPasswordVisible]=useState(false);
    function passwordToggleVisibility(){
      setPasswordVisible(prevVisible => !prevVisible);
    };

    const user ={
      email: '',
      password: '',
  }
    
    function handleEmailChange() {
        const inputValue = document.getElementById("email").value;
        const errorDisplayArea = document.querySelector(
          ".validate-email-display-error-section"
        );
        if (inputValue) {
          const isValid = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
            inputValue
          );
          if (!isValid) {
            errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Invalid email</div>`;
            document.getElementById("email").value = "";
          } else {
            errorDisplayArea.innerHTML = ``;
            
            handleEmailValidation(inputValue);
          }
        } else {
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Email can't be empty</div>`;
        }
      }

      function handleEmailValidation(email){
        const emailErrorDisplayArea = document.querySelector(
            ".validate-email-display-error-section"
          );
          const passwordErrorDisplayArea = document.querySelector(
            ".validate-password-display-error-section"
          );  
          const inputValue = document.getElementById("password").value;
          if(inputValue !== ""){
            user.email = email;
            user.password = inputValue;
            posting();
          }
          else{
            passwordErrorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">password can't be empty</div>`;
            document.getElementById("password").value = "";
          }
      }

    function handleSubmit (e) {
        e.preventDefault();
        handleEmailChange();
    };

    async function posting(){
      let response;
      try {
        response = await axios.post('http://localhost:6060/auth/signIn', user);
        const emailErrorDisplayArea = document.querySelector(
          ".validate-email-display-error-section"
        );
        const passwordErrorDisplayArea = document.querySelector(
          ".validate-password-display-error-section"
        );
        switch(response.status) {
          case 'Invalid password':
            passwordErrorDisplayArea.innerHTML = `<div style="color:red; font-size: small; font-weight: bold;">Password is in valid</div>`;
            break;
          case 'Invalid user':
            emailErrorDisplayArea.innerHTML = `<div style="color:red; font-size: small; font-weight: bold;">Invalid user email</div>`;
            passwordErrorDisplayArea.innerHTML = "";
            document.getElementById("password").value = "";
            break;
          case "success":
            emailErrorDisplayArea.innerHTML = `<div style="color:green; font-size: small; font-weight: bold;">Success</div>`;
            passwordErrorDisplayArea.innerHTML = "";
            break;
          default:
            console.error('Unexpected response status:', response.status);
        }
      } catch (error) {
        setErrorBack(error.response.data.message)
      }
    }

    return(
        <div className="registration-form-container">
        <div className="registration-form">
          <h1>Login</h1>
          <form>
              <div className="registration-form-group">
              {errorBack && <div className="validate-name-display-backend-error-section">{errorBack}</div>}
              <div className="validate-email-display-error-section"></div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" />
            </div>
            <div className="registration-form-group">
              <div className="validate-password-display-error-section"></div>
                <label htmlFor="password">Password</label>
                <div className="password-input-and-hide-show-button">
                    <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    />
                    <button
                    className="validate-password-button"
                    type="button"
                    onClick={passwordToggleVisibility}
                    >
                    {passwordVisible ? "Hide" : "Show"}
                    </button>
                </div>
            </div>
             
            <div className="registration-buttons">
            <button type="submit" className="back-to-login-button" onClick={handleSubmit}>
                Login
              </button>
              <button
                type="submit"
                className="create-account-button"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};