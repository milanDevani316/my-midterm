//Functional component

import React from 'react';
import '../App.css';
import appleImage from '../images/apple.jpg'; 
import milkImage from '../images/milk.jpg'; 
import breadImage from '../images/bread.jpg';
import eggsImage from '../images/egg.jpg'; 


function ShoppingCart({ cartItems = [], removeFromCart }) {
  function getImageSrc(productName) {
    switch (productName) {
      case 'Apples':
        return appleImage;
      case 'Milk':
        return milkImage;
      case 'Bread':
        return breadImage;
      case 'Eggs':
        return eggsImage;
      default:
        return '';
    }
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={getImageSrc(item.name)} alt={item.name} />
              <div>
                <p>{item.name} - ${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
