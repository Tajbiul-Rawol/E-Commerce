import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { Checkout } from './components/Checkout';
import { Basket } from './components/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
);


