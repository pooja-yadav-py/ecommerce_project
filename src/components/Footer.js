import React from 'react';
import fb from '../images/fb.png';
import pin from '../images/pin.png';
import twitter from '../images/twitter.jpg';
import insta from '../images/insta.jpg';
 import './Footer.css';




const footer = () => {
    return (
      <>
        <div>
            <div className="card">
            <div className="row justify-content-md-center">
              <div className="card-header">
                <h6>Customer services</h6>
                <p>Contact Us</p>
                <p>Sell With Us</p>
                <p>Shipping</p>
            </div>
            <div className="vl"></div>
            <div className="card-header">
              <h6>Links</h6>
              <p>Contact Us</p>
              <p>Sell With Us</p>
              <p>Shipping</p>
            </div>
            <div className="vl"></div>
            <div className="card-header">
              <h6>Newsletter</h6>
              <p>Sign Up for Our Newsletter</p>
              
              <form class="form-inline my-2 my-lg-0">
              <input className="inputbox form-control  " type="search" placeholder="Please Enter Your Email" aria-label="Search" />
              <button className="btn btn-sm my-1 my-sm-0" type="submit">Subscribe</button>
              </form>
            </div>
            </div>
            <div className="bottom-footer row justify-content-md-center">
            <div>
            <p className="text-muted mb-1 mt-4"><small>Ⓒ 2021 MERN Store</small></p>
              <div className="row justify-content-md-center">
                <img src={fb} alt="fb"/>
                <img src={insta} alt="instagram"/>
                <img src={pin} alt="pinintrest"/>
                <img src={twitter} alt="twitter"/>
              </div>
            </div>
            </div>
            </div>
            </div>
            </>
    )
}

export default footer;
