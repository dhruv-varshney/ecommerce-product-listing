import React from 'react';

export default function ProductCard({ product, isFavorite, toggleFavorite }) {
  return (
    <div className={`card ${isFavorite ? 'favorite' : ''}`}>
      <button className="favorite-btn" onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? '♥' : '♡'}
      </button>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>💵 ${product.price}</p>
      <p>📦 {product.category}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
}
