import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Laptop", price: 899, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
  { id: 3, title: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
