import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, title: "Laptop", price: 899, image: "https://via.placeholder.com/150", description: "A powerful laptop." },
  { id: 2, title: "Headphones", price: 199, image: "https://via.placeholder.com/150", description: "High-quality sound." },
  { id: 3, title: "Smartphone", price: 699, image: "https://via.placeholder.com/150", description: "Fast and sleek." },
];

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
