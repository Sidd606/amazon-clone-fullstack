import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Account created successfully!");
      navigate("/login");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="login">
      <Link to="/" className="login-logo">
        Amazon Clone
      </Link>

      <div className="login-container">
        <h1>Create Account</h1>

        <form onSubmit={handleSignup}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-signin-btn">
            Sign Up
          </button>
        </form>

        <p>
          By creating an account you agree to Amazon Clone Conditions of Use.
        </p>

        <Link to="/login">
          <button className="login-register-btn">
            Already have an account? Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;