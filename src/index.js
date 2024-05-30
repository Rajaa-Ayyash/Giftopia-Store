import React from 'react';
import ReactDOM from 'react-dom/client';
import './general.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/home/Home.js';
import CartShopping from './pages/cartShopping/CartShopping.js';
import LoginFormPage from './pages/loginFormPage/LoginFormPage.js';
import SearshAiPage from './components/searshAi/SearshAiPage.js';
import Products from './components/products/Products.js';
import ProductDetails from './components/productDetailsPage/ProductDetails.js';
import ValantinePage from './pages/valantinePage/ValantinePage.js';
import BirthdayBroduct from './components/birthdayProduct/BirthdayBroduct.js';
import RecumentideProduct from './components/recumendidProduct/RecumentideProduct.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },{
    path:"/cart",
    element:<CartShopping/>
  }
  ,
  {
    path : '/login',
    element : <LoginFormPage />,
  },
  {
    path : '/SearshAiPage',
    element : <SearshAiPage />
  },
  {
    path : '/Products',
    element : <ProductDetails/>
  },
  {
    path : '/ValantineProduct',
    element : <ValantinePage />
  },
  {
    path :'/BirthdayBroduct',
    element : <BirthdayBroduct />
  },
  {
    path :'/RecumentideProduct',
    element : <RecumentideProduct />
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();