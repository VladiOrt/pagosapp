import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

import Dashboard from './components/dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter >
        <Routes>
            <Route  path='/' element={<Dashboard/>} />       
        </Routes>
      </BrowserRouter> 
  </React.StrictMode>
);

reportWebVitals();
