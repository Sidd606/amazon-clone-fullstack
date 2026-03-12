import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-left">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your Amazon Cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>

                <div className="qty-buttons">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-right">
          <div className="subtotal-box">
            <h3>
              Subtotal ({cart.length} items):
              <strong> ${total.toFixed(2)}</strong>
            </h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;