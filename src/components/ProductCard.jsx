import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;
