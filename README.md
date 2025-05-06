# E-Commerce Product Listing Page

## Overview
This project is an E-Commerce Product Listing Page that allows users to browse, filter, and favorite products. It is built using React and provides a responsive design for an optimal user experience.

## Features
- Display a list of products with the following fields:
  - Image
  - Name
  - Price
  - Category
  - Rating
- Filter products by:
  - Category
  - Rating
- Sort products by price (ascending/descending).
- Add products to a favorites list.
- Visually highlight favorited products.
- Responsive grid layout for product display.
- Sticky filter/sort bar for easy access.

## Technologies Used
- React
- CSS
- JSON for mock data
- Local Storage for persisting favorites

## Project Structure
```
ecommerce-product-listing
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── ProductCard.jsx
│   │   ├── FilterBar.jsx
│   │   └── Pagination.jsx
│   ├── pages
│   │   └── ProductListingPage.jsx
│   ├── styles
│   │   ├── ProductCard.css
│   │   ├── FilterBar.css
│   │   └── Pagination.css
│   ├── utils
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── package.json
├── .gitignore
├── README.md
└── mock-data
    └── products.json
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ecommerce-product-listing
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Browse through the product listings.
- Use the filter bar to narrow down products by category and rating.
- Sort products by price using the sort options.
- Click on the heart icon to add products to your favorites list.
- The favorites list is persisted in local storage, so it remains available on page refresh.

## Additional Challenges
- Implement client-side pagination or infinite scrolling for better navigation through products.
- Ensure that the favorites list persists using local storage.

## License
This project is open-source and available under the MIT License.