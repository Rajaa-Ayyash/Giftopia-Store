import React, { useState } from "react";
import './LoginForm.css';
import axios from 'axios';
import Cookie from 'cookie-universal'
import { redirect } from "react-router-dom";
export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  //cookies
  const cookie = Cookie();
  const passwordToggleVisibility = () => {
    setPasswordVisible(prevVisible => !prevVisible);
  };
  const validateEmail = (email) => {
    return /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  };
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (!inputValue) {
      setEmailError("Email can't be empty");
    } else if (!validateEmail(inputValue)) {
      setEmailError("Invalid email");
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    if (!inputValue) {
      setPasswordError("Password can't be empty");
    } else {
      setPasswordError('');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && validateEmail(email) && password) {
      try {
        const response = await axios.post('http://localhost:6060/auth/signIn', { email, password });
        switch (response.data.message) {
          case 'Invalid password':
            setPasswordError("Password is invalid");
            break;
          case 'Invalid user':
            setEmailError("Invalid user email");
            setPassword('');
            break;
          case 'seccess':
            setEmailError('');
            setPasswordError('');
            setGeneralError("Success");
            const token = response.data.token;
            cookie.set('GiftopiaToken',token)
            if(response.data.role == 'admin'){
              window.location.pathname = '/dashpord'
            }
            else if (response.data.role == 'GeneralUser'){
              window.location.pathname = '/home'
            }
            break;
          default:
            setGeneralError("Unexpected response");
            console.error('Unexpected response status:', response.data.message);
        }
      } catch (error) {
        console.error(error);
        setGeneralError(error.response.data);
      }
    } else {
      if (!email) setEmailError("Email can't be empty");
      if (!password) setPasswordError("Password can't be empty");
    }
  };
  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="registration-form-group">
            {emailError && <div className="validate-email-display-error-section" style={{ color: 'red', fontSize: 'x-small', fontWeight: 'bold' }}>{emailError}</div>}
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="registration-form-group">
            {passwordError && <div className="validate-password-display-error-section" style={{ color: 'red', fontSize: 'x-small', fontWeight: 'bold' }}>{passwordError}</div>}
            <label htmlFor="password">Password</label>
            <div className="password-input-and-hide-show-button">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
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
          {generalError && <div style={{ color: generalError === "Success" ? 'green' : 'red', fontSize: 'small', fontWeight: 'bold' }}>{generalError}</div>}
          <div className="registration-buttons">
            <button type="submit" className="back-to-login-button">
              Login
            </button>
            <button type="button" className="create-account-button">
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}