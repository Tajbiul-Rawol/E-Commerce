import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

  return (
    <>
      <header> E-Store</header>
      <section>
        <nav>
          {results.map(d => (
            <div key={d.id}>{d.title}</div>
          ))}
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
