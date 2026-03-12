import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Checkout({ cart }) {

  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = async () => {

    try {

      const order = {
        userId: 1,
        totalAmount: total
      };

      await API.post("/orders/create", order);

      alert("Order placed successfully");

      navigate("/");

    } catch (err) {

      console.log(err);
      alert("Order failed");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h2>Checkout</h2>

      {cart.map(item => (

        <div key={item.id}>

          <p>
            {item.title} × {item.quantity}
          </p>

        </div>

      ))}

      <h3>Total: ${total}</h3>

      <button onClick={handleOrder}>
        Place Order
      </button>

    </div>

  );

}

export default Checkout;