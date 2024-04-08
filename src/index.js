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
import Dashboard from './dashboard/Dashboard.js';

import CartShopping from './pages/cartShopping/CartShopping.js';
import NewAdmin from './pages/addNewAdmin/NewAdmin.js';

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
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path : "/cart",
    element : <CartShopping />
  },
  {
    path: "/Admin",
    element: <NewAdmin />
  }


]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();