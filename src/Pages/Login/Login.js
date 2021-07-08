import React from 'react';
import TopHeader from '../../components/Topheader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import google from "../../images/google.jpeg";
import fb from "../../images/fb2.jpg";

import "./Login.css"; 

const Login = () => {
    return (
        <>
        <TopHeader/>
        <Navbar/>
        <div className="container container_login">
            <div className="inner-container">
                <div className="Login_headline"> 
                <h6>Login</h6>
                </div>
                <hr/>
            <div className="main_container row justify-content-between">    
            <div className="form_container ml-1 ">    
            <form>
                <div className="form ml-3">
                    <div className="form-group">
                    <label htmlFor="inputEmail4">Email Address</label>
                    <input type="email" className="form-control size-50"  id="inputEmail4" placeholder="Please Enter Your Email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control " id="inputPassword4" placeholder="Please Enter Your Password" />
                    </div>
                </div>
                <div className="form_bottom d-flex">
               <button type="submit" className="btn pl-4 pr-4 ml-3 mt-4">Login</button>
               <Link to="/logout" className="Creat_account mt-4 ml-5">Creat an account</Link>
               </div>
            </form>
            </div>
            <div className="right_form mr-4">
            <button><img src={google} alt="google"/>Login with Google</button>
            <button><img src={fb} alt="fb"/>Login with Facebook</button>
            <div>
                <Link>forget password?</Link>
            </div>
            </div>
            </div>
            

            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Login;
