import React from "react";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./Placeorder.css";

const Placeorder = (props) => {
  console.log(props);
  return (
    <>
      <Topheader />
      <Navbar
        cartItems={props.cartItems}
        ShowRightSidebar={props.ShowRightSidebar}
        setShowRightSidebar={props.setShowRightSidebar}
        updateCartItems={props.updateCartItems}
        numberOfProduct={props.numberOfProduct}
        setNumberOfProduct={props.setNumberOfProduct}
        setSelectedCategory={props.setSelectedCategory}
      />
      <div className="container outer_Container">
        <div className="inner_Container">
          <h5>Thank You For Your Order.</h5>
          <p className="mt-4">Order #6100d60a6b289b00048e7d51 is complete.</p>
          <p>A confirmation email will be sent to you shortly.</p>
          <div className="placorder">
            <button className="placeorder_left_button mt-2 ml-5 p-1 ">
              <Link to="/shop" className="placeorder_Link">
                Manage Orders
              </Link>
            </button>
            <button className="placeorder_right_button mt-2 ml-4 p-1">
              <Link to="/shop" className="placeorder_Link">
                Continue Shopping
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Placeorder;
