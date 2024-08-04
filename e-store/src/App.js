import './App.css';
import { useEffect, useState } from 'react';
import { getCategories } from './api/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { Checkout } from './components/Checkout';
import { Basket } from './components/Basket';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';


function App() {
  const [categories, setCategories] = useState({ message: '', data: [] });

  useEffect(() => {
    const fetchCategoryData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchCategoryData();
  }, []);




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
