import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By countinuing, I agree to the termas of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a New Acoount?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already Have an Account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
