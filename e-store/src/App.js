import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './api/api';

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
      <div key={p.id}>{p.title}</div>
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
        <article>
          <h1>Products</h1>
          {products.message && <div>Error: {products.message}</div>}
          {products && renderProducts()}
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
