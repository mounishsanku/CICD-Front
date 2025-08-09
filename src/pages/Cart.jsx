import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : null}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
