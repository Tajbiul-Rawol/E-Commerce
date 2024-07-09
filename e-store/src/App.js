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
    <div className="App">
      {results.map(d => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
}

export default App;
