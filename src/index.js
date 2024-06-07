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
import CartShopping from './pages/cartShopping/CartShopping.js';
import LoginFormPage from './pages/loginFormPage/LoginFormPage.js';
import AdminDashboard from './components/adminDashboard/AdminDashboard.js';
import ProductMangmantPage from './pages/productMangmantPage/ProductMangmantPage.js';

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
    path: "/cart",
    element: <CartShopping />
  },
  {
    path: "/login",
    element: <LoginFormPage />,
  },
  {
    path: "/productmangmantpage",
    element: <ProductMangmantPage />,
  },
  {
    path: "/daspord",
    element: <AdminDashboard />,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();