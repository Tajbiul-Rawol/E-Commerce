import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  const handleCategoryClick = id => {
    fetch(`http://localhost:5000/products?catid=${id}`)
      .then((response) => response.json())
      .then(data => {
        setProducts(data)
      });
  }

  const renderCategories = () => {
    return categories.map(c =>
      <Category onCategoryClick={() => { handleCategoryClick(c.id) }} key={c.id} title={c.title} id={c.id} />
    )
  }

  const renderProducts = () => {
    return products.map(p =>
      <div key={p.id}>{p.title}</div>
    )
  }

  return (
    <>
      <header> E-Store</header>
      <section>
        <nav>
          {
            categories && renderCategories()
          }
        </nav>
        <article>
          <h1>Products</h1>
          {products && renderProducts()}
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
