import React from 'react';
import TopHeader from '../../components/Topheader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import google from "../../images/google.jpeg";
import fb from "../../images/fb2.jpg";

import "./SignUp.css"; 

const SignUp = () => {
    return (
        <>
        <TopHeader/>
        <Navbar/>
        <div className="container container_signup">
            <div className="inner-container">
                <div className="Login_headline"> 
                <h6>Sign Up</h6>
                </div>
                <hr/>
            <div className="main_container_signup row justify-content-between">    
            <div className="form_container_signup ml-1 ">    
            <form>
                <div className="form ml-3">
                    <div className="form-group">
                    <label htmlFor="inputEmail4">Email Address</label>
                    <input type="email" className="form-control size-50"  id="inputEmail4" placeholder="Please Enter Your Email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input type="text" className="form-control " id="inputFirstName" placeholder="Please Enter Your First Name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input type="text" className="form-control " id="inputLastName" placeholder="Please Enter Your Last Name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control " id="inputPassword4" placeholder="Please Enter Your Password" />
                    </div>
                    
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Subscribe To Newsletters</label>
                    </div>
                    <button type="submit" className="btn  pl-4 pr-4 ml-0 mt-4">Sign Up</button>

                </div>
                
            </form>
            </div>
            <div className="right_form_signup mr-4">
            
            <button className="right_btn1"><img src={google} alt="google"/>Login with Google</button>
            <button className="right_btn2"><img src={fb} alt="fb"/>Login with Facebook</button>
            
            
            <div className="back_login">
                <Link to="/login">Back To Login</Link>
            </div>
            </div>
            </div>
            
            
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default SignUp;
