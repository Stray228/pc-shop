import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, setItems] = React.useState([]);

  fetch('https://my-json-server.typicode.com/Stray228/pc-shop/PC')
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      console.log('Масів компуктеров', arr);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
