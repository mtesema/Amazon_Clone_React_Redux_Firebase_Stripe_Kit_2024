import React from "react";
import "./Style/emptyCart.css";
import { useStateValue } from "../../Utility/StateProvider";
import Includes from "../../Includes/Includes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EmptyCartPage() {
  const [{ user }] = useStateValue();
  console.log(user);

  const Navigator = useNavigate();

  const firstName = user?.displayName
    ? user.displayName.split(" ")[0]
    : "Guest";

  const signinHandler = () => {
    Navigator("/login");
  };

  const signupHandler = () => {
    Navigator("/signup");
  };

  return (
    <Includes>
      <div className="empty-main-container">
        <div className="empty-cart-container">
          {user ? (
            <h2 className="empty-cart-greeting">Hi, {firstName}</h2>
          ) : (
            <h2 className="empty-cart-greeting">Hi, Guest</h2>
          )}
          <div className="empty-cart-img">
            <img
              src="../../../public/kettle-desaturated._CB445243794_.svg"
              alt=""
            />
          </div>
          <div className="empty-cart-text-container">
            <h1>
              <strong>Your Amazon Cart is empty</strong>{" "}
            </h1>
            <h3>
              <Link to="/products">Shop today's deals</Link>
            </h3>

            <p>
              Empty cart. <Link to="/">Return to homepage.</Link>{" "}
            </p>

            {!user ? (
              <div className="empty-cart-buttons">
                <div className="signin-button">
                  <button onClick={signinHandler}>
                    Sign in to your account
                  </button>
                </div>
                <div className="signup-button">
                  <button onClick={signupHandler}>Sign up now</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Includes>
  );
}

export default EmptyCartPage;
