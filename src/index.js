import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import ShowPage from './ShowPage.js';
import ShowPage2 from './ShowPage2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
    <Routes>
    <Route index element={<App />} />
    <Route path="/project01" element={<ShowPage />} />
    <Route path="/project02" element={<ShowPage2 />} />
     </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
