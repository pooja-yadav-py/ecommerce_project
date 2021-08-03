import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Product from "./Pages/Product/Product";
import Placeorder from "./Pages/Placeorder/Placeorder";

const App = () => {
 
  const initialState = JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  const [cartItems, updateCartItems] = useState(initialState);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategorySideBar, setSelectedCategorySideBar] = useState(null);
  const [ShowRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <div>
      <Switch>
        <Route
          path="/home"
          render={(props) => (
            <Home
              {...props}
              cartItems={cartItems}
              ShowRightSidebar={ShowRightSidebar}
              updateCartItems={updateCartItems}
              setShowRightSidebar={setShowRightSidebar}
              setSelectedCategory={setSelectedCategory}
              setSelectedCategorySideBar={setSelectedCategorySideBar}
              selectedCategorySideBar={selectedCategorySideBar}
            />
          )}
        />

        <Route
          path="/shop"
          render={(props) => (
            <Shop
              {...props}
              cartItems={cartItems}
              ShowRightSidebar={ShowRightSidebar}
              updateCartItems={updateCartItems}
              setShowRightSidebar={setShowRightSidebar}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setSelectedCategorySideBar={setSelectedCategorySideBar}
              selectedCategorySideBar={selectedCategorySideBar}
            />
          )}
        />
        <Route path="/login" 
         render={(props) => (
            <Login
              {...props}
               setSelectedCategory={setSelectedCategory}
            />
          )}
           />
        <Route path="/signup" 
        render={(props) => (
            <SignUp
              {...props}
              setSelectedCategory={setSelectedCategory}
            />
          )}
           />

        <Route
          path="/placeorder"
          render={(props) => (
            <Placeorder
              {...props}
              cartItems={cartItems}
              ShowRightSidebar={ShowRightSidebar}
              updateCartItems={updateCartItems}
              setShowRightSidebar={setShowRightSidebar}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setSelectedCategorySideBar={setSelectedCategorySideBar}
              selectedCategorySideBar={selectedCategorySideBar}
            />
          )}
        />
        <Route
          path="/product"
          render={(props) => (
            <Product
              {...props}
              cartItems={cartItems}
              ShowRightSidebar={ShowRightSidebar}
              updateCartItems={updateCartItems}
              setShowRightSidebar={setShowRightSidebar}
              setSelectedCategory={setSelectedCategory}
              setSelectedCategorySideBar={setSelectedCategorySideBar}
              selectedCategorySideBar={selectedCategorySideBar}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
