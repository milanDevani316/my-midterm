import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import Home from './files/Home'; 
import ProductList from './files/ProductList';
import ShoppingCart from './files/ShoppingCart';

function App() {
  // Define state
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product !== productToRemove));
  };

  return (
    <Router> 
      <div className="App">
        <header>
          <h1>GoGrocery</h1>
        </header>
        <main>
          <Home/> 
          <ProductList addToCart={addToCart} />
          <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
      </div>
    </Router>
  );
}

export default App;
