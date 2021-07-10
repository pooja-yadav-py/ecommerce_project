import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./RightSidebar.css";
import { RiDeleteBin7Line } from "react-icons/ri";

const RightSidebar = (props) => {
  console.log(props);
  const removeItem = (id) => {
    let cartItems = props.cartItems;
    console.log(id);
    const productIndex = cartItems.findIndex((item) => {
      console.log(item);
      return item.id == id;
    });
    console.log(productIndex);
    cartItems = cartItems.filter((item, index) => {
      return productIndex != index;
    });
    console.log(cartItems);
    localStorage.setItem("product", JSON.stringify(cartItems));
    props.updateCartItems(cartItems);
    console.log(props.cartItems);
  };
  let sum = 0;
  props.cartItems.forEach((item) => {
    sum = sum + item.price * item.quantity;
  });
  console.log(sum);

  return (
    <>
      <div className="outer_rightbar">
        <div className="rigthSidebar me-5">
          <div>
            <button
              className="hide_rightbar"
              onClick={() => props.setShowRightSidebar(false)}
            >
              x
            </button>
          </div>
          {props.cartItems.length ? (
            <div>
              <div className="scrollbar">
                <Scrollbars style={{ width: 430, height: 350 }}>
                  {props.cartItems.map((elem) => {
                    const {
                      id,
                      image,
                      title,
                      companyName,
                      description,
                      price,
                      quantity,
                    } = elem;
                    console.log(elem);
                    return (
                      <div className="scroll">
                        <hr />
                        <div className="product_list_rightSidebar d-flex flex-row ml-2">
                          <div>
                            <img src={image} alt="image" />
                          </div>
                          <div className="product_name">
                            <p>
                              <Link
                                to={{
                                  pathname: `/product/${title
                                    .split(" ")
                                    .join("-")}`,
                                  state: {
                                    elem: elem,
                                  },
                                }}
                                onClick={() => props.setShowRightSidebar(false)}
                              >
                                {title}
                              </Link>
                            </p>
                          </div>
                          <div className="deleteIcon">
                            <RiDeleteBin7Line onClick={() => removeItem(id)} />
                          </div>
                        </div>
                        <div className=" price_rightSidebar d-flex flex-row ml-3">
                          <p>price</p>
                          <p className="price">${quantity * price}</p>
                        </div>
                        <div className="quantity_rightSidebar d-flex flex-row ml-3">
                          <p>Quantity</p>
                          <p className="quantity">{quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                </Scrollbars>
              </div>

              <div className="footer_rightSidebar">
                <div className="footer_innerdiv">
                  <div className="d-flex footer_free_shipping">
                    <p className="ml-2 mt-2">Free Shipping</p>
                    <p className="free_shipping mt-2">$0</p>
                  </div>
                  <div className="d-flex ">
                    <p className="ml-2">Total</p>
                    <p className="Total">${sum}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="footer_left_button mt-2 ml-5 p-1">
                    Continue Shopping
                  </button>
                  <button className="footer_right_button mt-2 ml-4 p-1">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="empty_cart">😄your cart is empty 😄</p>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
