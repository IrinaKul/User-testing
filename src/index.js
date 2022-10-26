import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home'
import Tests from './pages/Tests';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />     
      <Route path="/tests" element={<Tests />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" component={<NotFound />} />  
    </Routes>
  </BrowserRouter>,
);

