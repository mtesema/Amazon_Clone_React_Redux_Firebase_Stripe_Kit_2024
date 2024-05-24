import React, { useRef } from "react";
import "./Style/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);

  // Function to handle email capture and navigation
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email)

    
    if (email) {
      // Navigate to /signin with the captured email
      navigate("/signin", { state: { email } });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  // Function to navigate to the registration page
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={handleEmailSubmit}>
          <h5>Email or mobile phone number</h5>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder=" "
            onFocus={(e) => e.target.parentNode.classList.add("focused")}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.parentNode.classList.remove("focused");
              }
            }}
          />

          <button type="submit" className="login__signInButton">
            Continue
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <div className="dropdown">
          <button className="dropdown-toggle">Need help?</button>
          <div className="dropdown-content">
            <a href="https://www.amazon.com/ap/forgotpassword">
              Forgot Password?
            </a>
            <a href="#">Other issues with Sign-in?</a>
          </div>
        </div>

        <button onClick={handleRegister} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
