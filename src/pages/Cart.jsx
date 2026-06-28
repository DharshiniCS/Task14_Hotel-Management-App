import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h2>{item.name}</h2>

                <p>Quantity : {item.quantity}</p>

                <p>Price : ₹{item.caloriesPerServing}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}