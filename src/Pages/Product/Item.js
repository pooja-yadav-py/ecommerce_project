import React, { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import fb from "../../images/fb.png";
import twitter from "../../images/twitter.jpg";
import whatsapp from "../../images/whtsapp.png";
import mail from "../../images/mail.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import "./Product.css";

const Item = (props) => {
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const location = useLocation();

  const elemPath = location.state.elem;
  const value = props.cartItems.map((val, index) => {
    return val._id;
  });

  const productid = value.filter((item, index) => {
    return elemPath._id === item;
  });
  const [addCartEnable, setAddCartEnable] = useState(
    productid[0] === elemPath._id
  );

  const updatedCardHandler = (product) => {
    if (!addCartEnable) {
      props.setShowRightSidebar(true);
      product.quantity = numberOfProduct;
      props.updateCartItems([...props.cartItems, product]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...props.cartItems, product])
      );
    } else {
      const proIndex = props.cartItems.findIndex(
        (item) => item._id === product._id
      );
      const updatedData = props.cartItems.filter(
        (item, index) => index !== proIndex
      );
      props.updateCartItems([...updatedData]);
      localStorage.setItem("product", JSON.stringify([...updatedData]));
    }
    setAddCartEnable(!addCartEnable);
  };
  return (
    <>
      <div className="col-md-5 product_img">
        <img
          className="card-selectFile-top"
          src={elemPath.selectedFile}
          alt="Card selectFile cap"
        />
      </div>
      <div className="col-md-5 product_details">
        <div className="product_inner">
          <div className="product_inner_container">
            <h6>{elemPath.title}</h6>
            <small>gucci-2</small>
            <hr />
            <p className="text-muted">
              see more from <b>Gucci</b>
            </p>
            <p className="product_description bg-light text-muted">
              {elemPath.description}
            </p>
            <p className="product_price">
              <b>${elemPath.price}</b>
            </p>
            <label for="quantity">Quantity</label>
            <br />
            <input
              type="number"
              id="quantity"
              value={numberOfProduct}
              onChange={(e) => {
                setNumberOfProduct(e.target.value);
              }}
              placeholder="Product Quality"
            />
            <div className="d-flex row">
              <a href="https://www.facebook.com/" target="example">
                {" "}
                <img className="fb" src={fb} alt="fb" />
              </a>
              <a href="https://twitter.com/" target="example">
                {" "}
                <img className="twitter" src={twitter} alt="twitter" />
              </a>
              <a href="https://web.whatsapp.com/" target="example">
                {" "}
                <img className="whtsapp" src={whatsapp} alt="whtsapp" />
              </a>
              <a href="https://mail.google.com/mail/" target="example">
                {" "}
                <img className="mail" src={mail} alt="mail" />
              </a>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light add_to_card mt-2"
                onClick={() => updatedCardHandler(elemPath)}
              >
                <BsFillBagFill />
                &nbsp;
                {addCartEnable ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
