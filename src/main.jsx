import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router';

// 1. Import RouterProvider instead of BrowserRouter
import { RouterProvider } from 'react-router'; // or "react-router-dom"

// 2. Import the router you created in Routes.jsx
// (Make sure this path matches exactly where your Routes.jsx is located)
import { router } from './app/routes.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Pass your router to the RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);