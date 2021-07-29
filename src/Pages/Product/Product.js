import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pencil from "../../images/pencil.jpg";
import Review from "./Review";
import Item from "./Item";
import "./Product.css";

const Product = (props) => {
  return (
    <>
      <Topheader />
      <Navbar
        cartItems={props.cartItems}
        setShowRightSidebar={props.setShowRightSidebar}
        ShowRightSidebar={props.ShowRightSidebar}
        updateCartItems={props.updateCartItems}
        setSelectedCategory={props.setSelectedCategory}
      />
      <div className="row">
        <div className="row container product_container mx-auto">
          <Item
            updateCartItems={props.updateCartItems}
            cartItems={props.cartItems}
            setShowRightSidebar={props.setShowRightSidebar}
            ShowRightSidebar={props.ShowRightSidebar}
          />
          <div className="w-100 product_middle_part" />
          <div className=" container  product_middle_part_inner w-100 row">
            <div className="col-md-5 product_rating ml-2">
              <div className="product_rating_inner">
                <h5 className="pl-4 pt-3">Rating</h5>
                <hr />
                <div className="row justify-content-center">
                  <img src={Pencil} alt="pencil" />
                  <FcApproval className="check_icon " />
                </div>
                <p className="text-muted row justify-content-center">
                  Be The First To Add A Review
                </p>
              </div>
            </div>
            <div className="col-md-5 product_goof">
              <div></div>
            </div>
          </div>
          <div className="w-100 product_middle_part" />
          <div className="col-md-5">
            <div></div>
          </div>
          <Review />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
