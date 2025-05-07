import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', rating: 0, ratingType: 'all' });
  const [sort, setSort] = useState('');
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filtered = products
    .filter((p) => !filters.category || p.category === filters.category)
    .filter((p) => {
      if (filters.rating === 0) return true;
      if (filters.ratingType === 'above') return p.rating >= filters.rating;
      if (filters.ratingType === 'below') return p.rating <= filters.rating;
      return true;
    });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'asc') return a.price - b.price;
    if (sort === 'desc') return b.price - a.price;
    return 0;
  });

  const paginated = sorted.slice((page - 1) * productsPerPage, page * productsPerPage);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <>
      <FilterBar filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
      <div className="grid">
        {paginated.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page}</span>
        <button disabled={page * productsPerPage >= sorted.length} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
}
