import React from "react";
import "./Auth.css";
import Logo from "../../images/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
// import authReducer from "../../reducers/authReducer";

const Auth = () => {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const dispatch = useDispatch();
  //I'm not use this yet
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [confrimPass, setConfirmPass] = useState(true);
  //handle change save values in devtools
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //reset form
  const resetForm = () => {
    setConfirmPass(true);
    setData({ username: "", email: "", password: "", confirmpass: "" });
  };
  //sign up submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // if (data.password !== data.confirmpass) {
    //   setConfrimPass(false);
    // } else {
    //   // Reset the form values
    //   resetForm();
    // }
    if (data.password === data.confirmpass) {
      dispatch(signUp(data)); // Dispatch signUp action if passwords match
      resetForm();
    } else {
      setConfirmPass(false); // Set Confirm Password error state if passwords do not match
      dispatch(logIn(data)); // Dispatch logIn action (or any other action) if passwords do not match
    }
  };
  //login submit
  const handleLoginSubmit = (e) => {
    dispatch(logIn(data)); // Dispatch logIn action
    e.preventDefault();
    resetForm();
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
            <form onSubmit={handleLoginSubmit}>
              <h3>Sign In</h3>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="USERNAME"
                value={data.username}
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="PASSWORD"
                value={data.password}
              />
              <input type="submit" value="login" />
              <a href="#" className="forget">
                Forget Password
              </a>
            </form>
          </div>
          <div className="form signupForm">
            <form onSubmit={handleSignupSubmit}>
              <h3>Sign Up</h3>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="USERNAME"
                value={data.username}
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email address"
                value={data.email}
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="PASSWORD"
                value={data.password}
              />
              <input
                type="password"
                name="confirmpass"
                placeholder="Confrim Password"
                onChange={handleChange}
                value={data.confirmpass}
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
