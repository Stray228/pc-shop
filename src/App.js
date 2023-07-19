import React from 'react';

import { Items } from './components/items';

import logo from './assets/img/logo.svg';
import cart from './assets/img/cart.svg';
import favorite from './assets/img/favorite.svg';
import user from './assets/img/user.svg';

import './scss/app.scss';

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
    <div className="wrapper">
      <header className="header">
        <img src={logo} alt="logo" />
        <ul className="icons">
          <li>
            <img src={cart} alt="cart" />
          </li>
          <li>
            <img src={favorite} alt="favorite" />
          </li>
          <li>
            <img src={user} alt="user" />
            <span>Sign In</span>
          </li>
        </ul>
      </header>
      <div className="search">
        <input type="text" />
        <select name="" id="">
          <option>Від дешевих до дорогих</option>
          <option>Від дорогих до дешевих</option>
          <option>Популярності</option>
        </select>
      </div>
      <Items />
    </div>
  );
}

export default App;
