import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount, user, logout }) {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo">Amazon Clone</Link>

        <div className="nav">
          {user ? (
            <>
              <p>Hello, {user}</p>
              <p onClick={logout} style={{ cursor: "pointer" }}>
                Logout
              </p>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </div>

      <div className="sub-header">
        <p>All</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </>
  );
}

export default Header;
