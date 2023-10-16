import React from "react";
import "./Auth.css";
import Logo from "../../images/logo.png";
import { useState } from "react";
const Auth = () => {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [confrimPass, setConfrimPass] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
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
      <div className="authLogo">
        <img src={Logo} className="logo" alt="" />
      </div>
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
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="USERNAME"
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="PASSWORD"
              />
              <input type="submit" value="login" />
              <a href="#" className="forget">
                Forget Password
              </a>
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="USERNAME"
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email address"
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="PASSWORD"
              />
              <input
                type="password"
                name="confrimpass"
                placeholder="Confrim Password"
                onChange={handleChange}
              />
              {/* check if password and confrim password is the same or not */}
              <span
                style={{
                  display: confrimPass ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  marginBottom: "7px",
                }}
              >
                *Confrime password is not same
              </span>
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
