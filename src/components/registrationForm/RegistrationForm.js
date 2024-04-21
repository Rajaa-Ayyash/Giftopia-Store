import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm (){
  const[passwordVisible,setPasswordVisible]=useState(false);
  function passwordToggleVisibility(){
    setPasswordVisible(prevVisible => !prevVisible);
  };

    function handleNameChange() {
      const inputFirstNameValue = document.getElementById("firstName").value;
      const inputLastNameValue = document.getElementById("lastName").value;
      const errorDisplayArea = document.querySelector(
        ".validate-name-display-error-section"
      );
      if(inputFirstNameValue){
        const isFirstNameValid = /^[a-zA-Z\-']+$/.test(inputFirstNameValue);
        if(!isFirstNameValid){
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Invalid first name: must only contains characters [A-Z,a-z]</div>`;
          document.getElementById("firstName").value = "";
        } else{
          errorDisplayArea.innerHTML = ``;
          if(inputLastNameValue){
            const isLastNameValid = /^[a-zA-Z\-']+$/.test(inputLastNameValue);
            if(!isLastNameValid){
              errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Invalid last name: must only contains characters [A-Z,a-z]</div>`;
              document.getElementById("lastName").value = "";
            } else{
              errorDisplayArea.innerHTML = ``;
              handleEmailChange();
            }
          } else{
            errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Last name can't be empty</div>`;
          }
        }
      }else{
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">First name can't be empty</div>`;
      }
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
          handlePasswordChange();
        }
      } else {
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Email can't be empty</div>`;
      }
    }

    function handlePasswordChange() {
      const inputValue = document.getElementById("password").value;
      const errorDisplayArea = document.querySelector(
        ".validate-password-display-error-section"
      );
      if (inputValue) {
        const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])[a-zA-Z\d!@#$%^&*.]{8,}$/.test(
          inputValue
        );
        if (!isValid) {
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Invalid password: must contains at least 8 characters, one uppercase letter, one lowercase letter, one digit, one symbol </div>`;
          document.getElementById("password").value = "";
          document.getElementById("confirmPassword").value="";
        } else {
          errorDisplayArea.innerHTML = ``;
          handleConfirmPasswordChange(inputValue);
        }
      } else {
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">password can't be empty</div>`;
      }
    }

    function handleConfirmPasswordChange(password) {
      const inputValue = document.getElementById("confirmPassword").value;
      const errorDisplayArea = document.querySelector(
        ".validate-confirmPassword-display-error-section"
      );
      if(inputValue === ""){
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Write password again</div>`;
      } else {
        if (inputValue === password) {
            errorDisplayArea.innerHTML = ``;
            handleLocationChange();
        } else {
            errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Passwords are deferent</div>`;
            document.getElementById("confirmPassword").value = "";
        }
      }
    }

    function handleLocationChange() {
      const inputCountryValue = document.getElementById("country").value;
      const inputCityValue = document.getElementById("city").value;

      const errorDisplayArea = document.querySelector(
        ".validate-location-display-error-section"
      );

      if (inputCountryValue) {
        errorDisplayArea.innerHTML = ``;
        if(inputCityValue){
          errorDisplayArea.innerHTML = ``;
          handlePhoneNumberChange();
        } else{
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">City can't be empty</div>`;
        }
      } else {
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Country can't be empty</div>`;
      }
    }

    function handlePhoneNumberChange() {
      const inputValue = document.getElementById("phoneNumber").value;
      const errorDisplayArea = document.querySelector(
        ".validate-phone-number-display-error-section"
      );
      if (inputValue !== "") {
        const isValid = /^\+?[0-9()-\s]+$/.test(inputValue);
        if (!isValid) {
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Invalid phone number</div>`;
          document.getElementById("phoneNumber").value = "";
        } else {
          errorDisplayArea.innerHTML = ``;
        }
      }
    } 

    function handleSubmit (e) {
        e.preventDefault();
        handleNameChange();
    };

    return (
      <div className="registration-form-container">
        <div className="registration-form">
          <h1>Registration</h1>
          <form>
            <div className="validate-name-display-error-section"></div>
            <div className="name-section-registration-form">
              <div className="registration-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="registration-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="registration-form-group">
              <div className="validate-email-display-error-section"></div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" />
            </div>
            <div className="registration-form-group">
              <div className="validate-password-display-error-section"></div>
                <label htmlFor="password">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                />
            </div>
            <div className="registration-form-group">
              <div className="validate-confirmPassword-display-error-section"></div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
              />
              <button
                  className="validate-password-button"
                  type="button"
                  onClick={passwordToggleVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
            </div>
            <div className="validate-location-display-error-section"></div>
            <div className="location-section-registration-form">
              <div className="registration-form-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" />
              </div>
              <div className="registration-form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" />
              </div>
              <div className="registration-form-group">
                <label
                  htmlFor="street"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Street{" "}
                  <div style={{ fontSize: "smaller", paddingLeft: "5px" }}>
                    (optional)
                  </div>
                </label>
                <input type="text" id="street" name="street" />
              </div>
            </div>
            <div className="registration-form-group">
              <div className="validate-phone-number-display-error-section"></div>
              <label
                htmlFor="phone-number"
                style={{ display: "flex", alignItems: "center" }}
              >
                Phone Number{" "}
                <div style={{ fontSize: "smaller", paddingLeft: "5px" }}>
                  (optional)
                </div>
              </label>
              <input id="phoneNumber" type="text" name="phoneNumber" />
            </div>
            <div className="registration-buttons">
              <button
                type="submit"
                className="create-account-button"
                onClick={handleSubmit}
              >
                Create Account
              </button>
              <button type="submit" className="back-to-login-button">
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};
