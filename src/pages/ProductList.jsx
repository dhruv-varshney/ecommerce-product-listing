import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';

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

  const totalPages = Math.ceil(sorted.length / productsPerPage);
  const paginated = sorted.slice((page - 1) * productsPerPage, page * productsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="product-list">
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
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
