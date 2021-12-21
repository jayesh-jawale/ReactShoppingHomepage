import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavBar } from './components/NavBar';
import { ShoppingCardLists } from './components/ShoppingCard';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="App">
      <MyNavBar cart={cart} />
      <Header />
      <ShoppingCardLists cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

