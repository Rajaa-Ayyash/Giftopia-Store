import React,{useState} from "react";
import './LoginForm.css'
export default function LoginForm (){
    const[passwordVisible,setPasswordVisible]=useState(false);
    function passwordToggleVisibility(){
      setPasswordVisible(prevVisible => !prevVisible);
    };

    const FakeEmails = {
        "user1@example.com": "Password1!",
        "user2@example.com": "SecurePass2#",
        "user3@example.com": "StrongPwd3$"
    };
    
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
        if(FakeEmails.hasOwnProperty(email)){
            const inputValue = document.getElementById("password").value;
            const passwordErrorDisplayArea = document.querySelector(
                ".validate-password-display-error-section"
              );
            
            if(inputValue === FakeEmails[email]){
                //console.log('Pass')
                emailErrorDisplayArea.innerHTML = '';
                passwordErrorDisplayArea.innerHTML = '';
                
            }else{
                passwordErrorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">password is in valid</div>`;
                document.getElementById("password").value = "";
            }
        }else{
            emailErrorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">email is not registered</div>`;
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }   
      }

    function handleSubmit (e) {
        e.preventDefault();
        handleEmailChange();
    };
    return(
        <div className="registration-form-container">
        <div className="registration-form">
          <h1>Login</h1>
          <form>
            <div className="registration-form-group">
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