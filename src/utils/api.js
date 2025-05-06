import productsData from '../products.json';

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData);
        }, 1000);
    });
};

export const filterProducts = (products, category, rating) => {
    return products.filter(product => {
        const categoryMatch = category ? product.category === category : true;
        const ratingMatch = rating ? product.rating >= rating : true;
        return categoryMatch && ratingMatch;
    });
};