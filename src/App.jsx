import React from 'react';
import ProductList from './pages/ProductList';
import './styles/styles.css'; // Assuming you have a global CSS file for styles

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>🛍️ E-Commerce Store</h1>
      <ProductList />
    </div>
  );
}