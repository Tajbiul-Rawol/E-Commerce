import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setResults(data);
      });
  }, []);

  const renderCategories = () => {
    return results.map(c =>
      <Category key={c.id} title={c.title} id={c.id} />
    )
  }

  return (
    <>
      <header> E-Store</header>
      <section>
        <nav>
          {
            results && renderCategories()
          }
        </nav>
        <article>
          main area
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
