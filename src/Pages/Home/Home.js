import React, { useState } from "react";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import ImagePart from "../../components/ImagePart";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  
  const history = useHistory();
  const rememberMe = localStorage.getItem("user");
  if (!rememberMe) {
    history.push("/login");
  }
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
        selectedProducts={props.selectedProducts}
        setSelectedCategory2={props.setSelectedCategory2}
        selectedCategory2={props.selectedCategory2}
      />
      <ImagePart />
      <Footer />
    </>
  );
};

export default Home;
