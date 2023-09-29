import React from "react";
import "./Auth.css";
import { useState } from "react";
const Auth = () => {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);

  const toggleBodyClass = () => {
    setIsButton1Clicked((prevIsButton1Clicked) => {
      // Toggle the class based on the previous state value
      const body = document.body;
      if (prevIsButton1Clicked) {
        console.log(isButton1Clicked);
        body.classList.remove("active");
      } else {
        body.classList.add("active");
      }
      // Return the new state value
      return !prevIsButton1Clicked;
    });
  };

  return (
    <div className="Auth">
      <div className="AuthContainer">
        <div className="box signin">
          <h2>Already have an account ?</h2>
          <button className="button authBtn" onClick={toggleBodyClass}>
            Sign In{" "}
          </button>
        </div>
        <div className="box signup">
          <h2>Don't have an account ?</h2>
          <button className="button authBtn" onClick={toggleBodyClass}>
            Sign Up{" "}
          </button>
        </div>
        <div className="formBox">
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="PASSWORD" />
              <input type="submit" value="login" />
              <a href="#" className="forget">
                Forget Password
              </a>
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="USERNAME" />
              <input type="text" placeholder="Email address" />
              <input type="password" placeholder="PASSWORD" />
              <input type="text" placeholder="Confrim Password" />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
