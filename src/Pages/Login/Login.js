import React, { useState } from "react";
import axios from "axios";
import TopHeader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import google from "../../images/google.jpeg";
import fb from "../../images/fb2.jpg";

import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [res, setRes] = useState("");

  const loginUser = async () => {
    if (!email || !password.trim()) {
      setShowError(true);
      return;
    }

    const response = await fetch("http://localhost:8080/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: email,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 400 || !data) {
      setRes("Invalid Credentials");
    } else {
      setRes("Login Successfully");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: data.result.email,
          name: data.result.firstname,
        })
      );

      history.push("/home");
    }
    setShowError(false);
  };

  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="container container_login">
        <div className="inner-container">
          <div className="Login_headline">
            <h6>Login</h6>
          </div>
          <hr />
          <div className="main_container row justify-content-between">
            <div className="form_container ml-1 ">
              <div className="form ml-3">
                <div className="form-group">
                  <label htmlFor="inputEmail4">Email Address</label>
                  <input
                    type="email"
                    className="form-control size-50"
                    id="inputEmail4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    id="inputPassword4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please Enter Your Password"
                  />
                </div>
              </div>
              {res.length ? <span>{res}</span> : ""}
              {showError ? <span>Email or password can not be blank</span> : ""}
              <div className="form_bottom d-flex">
                <button
                  name="login"
                  className="btn pl-4 pr-4 ml-3 mt-4"
                  onClick={() => {
                    loginUser();
                  }}
                >
                  Login
                </button>
                <Link to="/signUp" className="Creat_account mt-4 ml-5">
                  Creat an account
                </Link>
              </div>
            </div>
            <div className="right_form mr-4">
              <button>
                <img src={google} alt="google" />
                Login with Google
              </button>
              <button>
                <img src={fb} alt="fb" />
                Login with Facebook
              </button>
              <div>
                <Link>forget password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
