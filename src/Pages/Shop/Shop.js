import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import "./Shop.css";

const Shop = (props) => {
  const history = useHistory();
  const [items, setItems] = useState(Menu);
  const [selectedProducts, setSelectedProducts] = useState(Menu);

  const rememberMe = localStorage.getItem("user");

  console.log(items);
  if (!rememberMe) {
    history.push("/login");
  }

  useEffect(() => {
    if (!props.selectedCategory) {
      setSelectedProducts(items);
      return;
    }
    setSelectedProducts(
      items.filter((item) => item.companyName == props.selectedCategory)
    );
    console.log(selectedProducts);
  }, [props.selectedCategory]);

  useEffect(() => {
    console.log(props.selectedCategory2, "==============");
    if (!props.selectedCategory2) {
      setSelectedProducts(items);
      return;
    }

    setSelectedProducts(
      items.filter((item) => item.category == props.selectedCategory2)
    );
  }, [props.selectedCategory2]);

  console.log(selectedProducts, "=============12");
  return (
    <>
      <Topheader />
      <Navbar
        setShowRightSidebar={props.setShowRightSidebar}
        ShowRightSidebar={props.ShowRightSidebar}
        cartItems={props.cartItems}
        updateCartItems={props.updateCartItems}
        items={items}
        setSelectedCategory={props.setSelectedCategory}
        setSelectedCategory2={props.setSelectedCategory2}
        selectedCategory2={props.selectedCategory2}
      />

      <div className=" box_shop ">
        <div className="row container box_shop_list col-12  ">
          {selectedProducts.length ? (
            selectedProducts.map((elem) => {
              const {
                id,
                image,
                title,
                companyName,
                description,
                price,
                quantity,
              } = elem;
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/product/${title.split(" ").join("-")}`,
                    state: { elem: elem },
                  }}
                >
                  <div className="card_shop" style={{ width: "14rem" }}>
                    <img
                      className="card-img-top"
                      src={image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{title}</h6>
                      <p className="company_title text-muted">
                        By <b>{companyName}</b>
                      </p>
                      <p className="card-text text-muted">{description}</p>
                      <p>
                        <b>${price}</b>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="empty_Selected_Product">
              🙅 There is no products in category{props.selectedCategory} 🙅
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
