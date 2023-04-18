import React, { useState } from "react";
import "./main.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
        <div className="col-5 mx-auto p-5 login-contant">
          <div className="login-page text-center">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="email my-4">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="password my-4">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  name="password"
                />
              </div>
              <button className="login-button btn-dark" type="submit">Log In</button>
            </form>
            <button
              className="link-btn btn-dark"
              onClick={() => props.onFormSwitch("register")}
            >
              Don't have an account? Register here.
            </button>
          </div>
        </div>
    </div>
  );
};
