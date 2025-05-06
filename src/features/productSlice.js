import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: { category: '', rating: 0 },
  sort: '',
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  page: 1,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setRating(state, action) {
      state.filters.rating = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fid) => fid !== id);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  setCategory,
  setRating,
  setSort,
  toggleFavorite,
  setPage,
} = productSlice.actions;

export default productSlice.reducer;
