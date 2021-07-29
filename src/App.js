import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Product from "./Pages/Product/Product";
import Menu from "./components/Menu";
import Placeorder from "./Pages/Placeorder/Placeorder";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("product"))
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  const [cartItems, updateCartItems] = useState(initialState);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);

  console.log(initialState);
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
              setSelectedCategory2={setSelectedCategory2}
              selectedCategory2={selectedCategory2}
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
              setSelectedCategory2={setSelectedCategory2}
              selectedCategory2={selectedCategory2}
            />
          )}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

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
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
