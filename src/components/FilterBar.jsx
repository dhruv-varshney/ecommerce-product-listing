import React from 'react';

export default function FilterBar({ filters, setFilters, sort, setSort }) {
  return (
    <div className="header">
      <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Appliances">Appliances</option>
      </select>

      <select onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}>
        <option value="0">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars & above</option>
        <option value="3">3 Stars & above</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}
