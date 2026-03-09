import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/csite-colloquium/'>
    
    <App />

    </BrowserRouter>
  </React.StrictMode>
);
