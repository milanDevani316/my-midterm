//Class component

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <h1>Welcome to our Online Store</h1>
          <p>Explore our wide range of products</p>
        </header>
        <main>
          <section className="product-info">
            <h2>About Our Products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet urna sit amet orci ultrices, a consectetur leo placerat. In hac habitasse platea dictumst.</p>
            <p>Nullam feugiat pretium velit, vel dignissim justo malesuada sit amet. Sed eu eros at dolor fermentum fermentum.</p>
          </section>
          <section className="explore-button">
            <Link to="/products" className="explore-link">Explore More</Link>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
