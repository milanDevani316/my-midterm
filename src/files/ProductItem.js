//Functional component

import React from 'react';
import '../App.css';
import appleImage from '../images/apple.jpg';
import milkImage from '../images/milk.jpg';
import breadImage from '../images/bread.jpg';
import eggsImage from '../images/egg.jpg';

function ProductItem({ product, addToCart }) {
  // Function to select image based on the product name
  const getImageSrc = (productName) => {
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
        return null;
    }
  };

  // Render component
  return (
    <div className="product-item">
     <img src={getImageSrc(product.name)} alt={product.name} />
   <p>{product.name} - ${product.price}</p>
     <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
