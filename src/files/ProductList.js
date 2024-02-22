//Functional component

import React from 'react';
import '../App.css';
import ProductItem from './ProductItem';
import ShoppingCart from './ShoppingCart';

const products = [
  { id: 1, name: 'Apples', category: 'Fruits', price: 2.99, image: 'apple.jpg' },
  { id: 2, name: 'Milk', category: 'Dairy', price: 1.99, image: 'milk.jpg' },
  { id: 3, name: 'Bread', category: 'Bakery', price: 2.49, image: 'bread.jpg' },
  { id: 4, name: 'Eggs', category: 'Dairy', price: 2.29, image: 'egg.jpg' }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
         {/* Map over the products to get each product */}
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default ProductList;
