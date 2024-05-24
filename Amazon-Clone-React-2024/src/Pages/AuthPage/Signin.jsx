import React, { useState, useEffect} from "react";
import "./Style/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase/firebase";
import { useStateValue } from "../../Utility/StateProvider";

function SignIn() {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: "SET_USER",
          user: { name: user.displayName, email: user.email },
        });
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };


   useEffect(() => {
     if (location.state && location.state.email) {
       setEmail(location.state.email); // Set email from location state
     }
   }, [location.state]);



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
        <form>
          <h5>{email}</h5>
          
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Continue
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <hr />
        <p>
          <Link to="/signup">Create your Amazon Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
