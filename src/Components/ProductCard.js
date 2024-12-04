import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ title, description, price, imageUrl }) {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
        </div>
    );
}

export default ProductCard;
