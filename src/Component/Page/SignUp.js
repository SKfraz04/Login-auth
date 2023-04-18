import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <div className="col-5 mx-auto">
          <div className="login-contant">
        <div className="signup text-center p-5">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              {/* <label htmlFor="name">Full name</label> */}
              <input
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Full Name"
              />
              {/* <label htmlFor="email">email</label> */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                id="email"
                name="email"
              />
              {/* <label htmlFor="password">password</label> */}
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              <button className="signup-btn" type="submit">
                SignUp
              </button>
            </form>
            <button
              className="link-btn"
              onClick={() => props.onFormSwitch("login")}
            >
              Already have an account? Login here.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
