import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './api/api';
import CategoryProduct from './components/CategoryProduct';

function App() {
  const [categories, setCategories] = useState({ message: '', data: [] });
  const [products, setProducts] = useState({ message: '', data: [] });

  useEffect(() => {
    const fetchCategoryData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchCategoryData();
  }, []);

  const handleCategoryClick = id => {
    console.log(id);
    const fetchProductData = async () => {
      const data = await getProducts(id);
      setProducts(data);
    }
    fetchProductData();
  }

  const renderCategories = () => {
    return categories.data.map(c =>
      <Category onCategoryClick={() => { handleCategoryClick(c.id) }} key={c.id} title={c.title} id={c.id} />
    )
  }

  const renderProducts = () => {
    return products.data.map(p =>
      <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    )
  }

  return (
    <>
      <header> E-Store</header>
      <section>
        <nav>
          {categories.message && <div>Error: {categories.message}</div>}
          {
            categories.data && renderCategories()
          }
        </nav>
        <main>
          <h1>Products</h1>
          {products.message && <div>Error: {products.message}</div>}
          {products && renderProducts()}
        </main>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
