import React from 'react';
import ReactDOM from 'react-dom/client';
import './general.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/home/Home.js';
import AccountPage from './account/AccountPage.js';
import EditEmail from './profile/EditEmail.js';
import EditPassword from './profile/EditPassword.js';
import EditProfile from './profile/EditProfile.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/account",
    element: <AccountPage />
  },
  {
    path: "/edit-email",
    element: <EditEmail />
  },
  {
    path: "/edit-password",
    element: <EditPassword />
  },
  {
    path: "/edit-profile",
    element: <EditProfile />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();