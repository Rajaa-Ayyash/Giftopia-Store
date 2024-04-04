import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/home/Home.js';
import AddRating from './pages/rating/AddRating.js';
import ViewRating from './pages/rating/ViewRating.js';

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
    path: "/add-rating",
    element: <AddRating/>
  },
  {
    path: "/view-rating",
    element: <ViewRating/>
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();