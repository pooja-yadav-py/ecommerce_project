import React, { useState } from "react";
import TopHeader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import google from "../../images/google.jpeg";
import fb from "../../images/fb2.jpg";

import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();
  const [showError,setShowError] = useState(false);
  const [res,setRes] = useState("");
  // change name of state
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  

  
  const handleInputs = (e) => {
    setUser({ ...user, [ e.target.name]: e.target.value });
  };
  const registerUser = async () =>{
    // use trim with other also
    if (!user.email || !user.firstname || !user.lastname || !user.password.trim()){
        setShowError(true);
        return;
    }
      
      const response = await fetch(`http://localhost:8080/signup`, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email:user.email,
        firstname:user.firstname,
        lastname:user.lastname,
        password:user.password
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    
    if(response.status==422){
       setRes(data.error);
     }else {
       setRes(data.message);
      
       history.push('/Login');
     }
     setShowError(false);
  }

  
  return (
    <>
      <TopHeader />
      <Navbar setSelectedCategory={ props.setSelectedCategory}/>
      <div className="container container_signup">
        <div className="inner-container">
          <div className="Login_headline">
            <h6>Sign Up</h6>
          </div>
          <hr />
          <div className="main_container_signup row justify-content-between">
            <div className="form_container_signup ml-1 ">
             
                <div className="form ml-3">
                  <div className="form-group">
                    <label htmlFor="inputEmail4">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control size-50"
                      id="inputEmail4"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Please Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control "
                      id="inputFirstName"
                      value={user.firstname}
                      onChange={handleInputs}
                      placeholder="Please Enter Your First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control "
                      id="inputLastName"
                      value={user.lastname}
                      onChange={handleInputs}
                      placeholder="Please Enter Your Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control "
                      id="inputPassword4"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Please Enter Your Password"
                    />
                  </div>
                  {showError?<span>plz filled the field properly</span>:""}
                  {res.length?<span>{res}</span>:""}

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Subscribe To Newsletters
                    </label>
                  </div>
                  <button  name="signup" id="signup" 
                      className="btn  pl-4 pr-4 ml-0 mt-4" 
                      onClick={() => {registerUser()} }>
                    Sign Up
                  </button>
                </div>
              
            </div>
            <div className="right_form_signup mr-4">
              <button className="right_btn1">
                <img src={google} alt="google" />
                Login with Google
              </button>
              <button className="right_btn2">
                <img src={fb} alt="fb" />
                Login with Facebook
              </button>

              <div className="back_login">
                <Link to="/login">Back To Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
