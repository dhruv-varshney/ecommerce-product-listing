# 🛍️ E-Commerce Product Listing Page

This is a fully functional front-end application built with **React** that displays a list of products for an e-commerce website. It supports filtering, sorting, favoriting, and pagination—all managed using **Redux Toolkit** and persisted with **localStorage**.

---

## 🚀 Features

- ✅ List of products with image, name, price, category, and rating
- 🔍 Filter by category and rating
- 📊 Sort by price (ascending or descending)
- ❤️ Add or remove favorites (persisted using localStorage)
- 📦 Paginate products for better performance
- 📱 Fully responsive layout with grid display

---

## 🧱 Tech Stack

- **React** (via Create React App)
- **Redux Toolkit** for state management
- **React Redux** for connecting UI to store
- **CSS** (basic styles included in `styles.css`)
- **LocalStorage** for persisting favorites

---

## 🗂️ Folder Structure

```
ecommerce-product-listing/
├── public/
│   └── products.json          # Mock data file with 1000 real-like products
├── src/
│   ├── app/
│   │   └── store.js           # Redux store configuration
│   ├── features/
│   │   └── productSlice.js    # Redux logic for filters, sort, favorites
│   ├── components/
│   │   ├── FilterBar.jsx      # Sorting and filter UI
│   │   └── ProductCard.jsx    # Single product display
│   ├── pages/
│   │   └── ProductList.jsx    # Main listing page
│   ├── App.jsx
│   ├── index.js
│   └── styles.css             # Global styles
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository or unzip the project
```bash
git clone https://github.com/your-username/ecommerce-product-listing.git
cd ecommerce-product-listing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open in browser
```
http://localhost:3000
```

---

## 📂 Sample Product Format

Each product in `products.json` looks like:

```json
{
  "id": 1,
  "image": "https://example.com/images/product1.jpg",
  "name": "Product 1",
  "price": 29.99,
  "category": "Electronics",
  "rating": 4.5
}
```

---

## 📬 Final Submission

This project was developed and submitted as part of the **SPRY Frontend Evaluation**.

---

## 📄 License

This project is licensed for educational and testing purposes.
