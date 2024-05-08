import React, { useState } from "react";
import "./RegistrationForm.css";
import Dropdown from "./dropdown/Dropdown.js";
import axios from 'axios';

export default function RegistrationForm (){
const user ={
    userName: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    gender: 'male'
}

const [genderSelected,setGenderSelected] = useState("Male")
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
              const name=inputFirstNameValue+" "+inputLastNameValue;
              user.userName=name;
              handleAgeAndGenderChange();
            }
          } else{
            errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Last name can't be empty</div>`;
          }
        }
      }else{
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">First name can't be empty</div>`;
      }
    }
    function handleAgeAndGenderChange() {
      const ageInputValue = document.getElementById("age").value;
      user.age=ageInputValue;
      user.gender=genderSelected.toLowerCase();
      handleEmailChange()
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
          user.email=inputValue;
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
            user.password=inputValue;
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
      const inputStreetValue = document.getElementById("street").value;

      const errorDisplayArea = document.querySelector(
        ".validate-location-display-error-section"
      );

      if (inputCountryValue) {
        errorDisplayArea.innerHTML = ``;
        if(inputCityValue){
          errorDisplayArea.innerHTML = ``;
          const location =inputCountryValue+", "+inputCityValue+", "+inputStreetValue;
          
          handlePhoneNumberChange();
        } else{
          errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">City can't be empty</div>`;
        }
      } else {
        errorDisplayArea.innerHTML = `<div style="color:red; font-size:"x-small" font-weight: bold;">Country can't be empty</div>`;
      }
    }

    function handlePhoneNumberChange(userName,ageInputValue,emailInputValue,password,inputCountryValue,inputCityValue,inputStreetValue) {
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
          user.phone= inputValue;
          posting()
        }
        }else{
          posting()
        }
    }

    function handleSubmit (e) {
      e.preventDefault();
      handleNameChange();
  };


  async function posting(){
    try {
      const response = await axios.post('http://localhost:6060/auth/signUp', user);
      const errorDisplayArea = document.querySelector(
        ".validate-name-display-error-section"
      );
      switch(response.data.message) {
        case "the user already exist":
          errorDisplayArea.innerHTML = `<div style="color:red; font-size: -small; font-weight: bold;">The user already exist</div>`;
          break;
        case 'error creating user':
          errorDisplayArea.innerHTML = `<div style="color:red; font-size: -small; font-weight: bold;">Error creating user</div>`;
          break;
        case 'success':
          errorDisplayArea.innerHTML = `<div style="color:green; font-size: -small; font-weight: bold;">Success</div>`;
          break;
        default:
          console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <div className="registration-form-container">
        <div className="registration-form">
          <h1>Registration</h1>
          <form>
            <div className="validate-name-display-error-section"></div>
            <div className="name-section-registration-form">
              <div className="registration-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName"  />
              </div>
              <div className="registration-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="age-gender-section-registration-form">
              <div className="registration-form-group">
                <label htmlFor="age" style={{display: "flex"}}>Age {" "}
                    <div style={{ fontSize: "smaller", paddingLeft: "5px" ,paddingTop: "2px"}}>
                      (optional)
                    </div>
                </label>
                <input type="number" id="age" name="age" />
              </div>
              <div className="registration-form-group registration-form-group-gender">
                <label htmlFor="gender">Gender</label>
                <div className="gender-dropdown">
                  <Dropdown selected={genderSelected} setSelected={setGenderSelected} />
                </div>
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
