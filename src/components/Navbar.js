import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown, BiChevronUp, BiCart } from "react-icons/bi";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import RightSidebar from "./RightSidebar";

const Navbar = (props) => {
  const rememberMe = JSON.parse(localStorage.getItem("user"));
  const [showSideBar, setSideBar] = useState(false);
  const [showBrandList, setBrandList] = useState(false);
  const history = useHistory();
  let menuRef = useRef();

  //hide brand dropdown clicking outside
  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setBrandList(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  //select category from brand dropdown
  const showProductItem = (category) => {
    props.setSelectedCategory(category);
  };

  //logOut work
  const logOut = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  //select category from sidebar
  const showCategoryItem = (categoryname) => {
    props.setSelectedCategorySideBar(categoryname);
  };

  //check login case for sidebar
  const showHideSideBar = () => {
    if (!rememberMe) {
      history.push("/login");
    } else {
      setSideBar(true);
    }
  };

  //check login case for Brandlist
  const brandList = () => {
    if (!rememberMe) {
      history.push("/login");
    } else {
      setBrandList(!showBrandList);
    }
  };

  //showHide right_side_bar or ordered Item list
  const showOrderedItemsList = () => {
    if (!rememberMe) {
      history.push("/login");
    } else {
      props.setShowRightSidebar(true);
    }
  };

  //sidebar Menu list
  let sideBarMenus = [
    { name: "Perfume", slug: "Perfume" },
    { name: "Mens", slug: "Men" },
    { name: "Bags", slug: "Beg" },
    { name: "Shoes", slug: "Shoes" },
  ];

  //brand dropdown menu list
  let brandNamesMenus = [
    { name: "Gucci", slug: "Gucci" },
    { name: "Polo", slug: "Polo" },
    { name: "Ralph-Lauren", slug: "Ralph Lauren" },
    { name: "Nike", slug: "Nike" },
    { name1: "Calvin-Klein", slug1: "Calvin Klein" },
    { name1: "Tommy-Hilfiger", slug1: "Tommy Hilfiger" },
    { name1: "apple", slug1: "apple" },
    { name1: "MERN", slug1: "MERN" },
  ];

  return (
    <>
      <div>
        <nav className="bottom navbar navbar-light bg-light d-flex justify-content-betwwen">
          <a className="navbar-brand">
            <MenuIcon
              onClick={() => showHideSideBar()}
              style={{ cursor: "pointer" }}
            />
            <sup>
              <Link to="/home" style={{ textDecoration: "none" }}>
                MERN Store
              </Link>
            </sup>
          </a>

          {showSideBar && (
            <div className="SideBar">
              <button className="btn1" onClick={() => setSideBar(false)}>
                x
              </button>
              <hr />
              <div className="header">Shop By Category</div>
              <div className="Shop_List">
                <ul>
                  {sideBarMenus.map((item) => {
                    return (
                      <li>
                        <Link
                          to={{ pathname: `/shop/Category/${item.name}` }}
                          onClick={() => {
                            showCategoryItem(item.slug);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          <div className="navbar_right_items d-flex justify-content-end ">
            <div
              className="mt-1 mr-2 Right_side_bar"
              onClick={() => showOrderedItemsList()}
            >
              <BiCart />
              <bold>
                <sup className="carditem_number">
                  {props.cartItems ? props.cartItems.length : 0}
                </sup>
              </bold>{" "}
              &nbsp;
            </div>
            <div className="dropdown">
              <button className="Brandbtn" onClick={() => brandList()}>
                Brands
                {showBrandList ? <BiChevronDown /> : <BiChevronUp />}
              </button>
              {showBrandList && (
                <div ref={menuRef} className="Brands_product" id="test1">
                  <div className="Brand_header d-flex justify-content-between pt-2">
                    <h6 className="ml-4">Shop By Brands</h6>
                    <Link
                      to={{ pathname: `/shop` }}
                      onClick={() => {
                        props.setSelectedCategory(null);
                        props.setSelectedCategorySideBar(null);
                      }}
                    >
                      See All
                    </Link>
                  </div>
                  <hr className="mt-1" />
                  <div className="Brand_Name d-flex mt-1">
                    <ul className="Brand_Name_left">
                      {brandNamesMenus.map((item) => {
                        return (
                          <li>
                            <Link
                              to={{ pathname: `/shop/Brand/${item.name}` }}
                              onClick={() => {
                                showProductItem(item.slug);
                              }}
                            >
                              {item.slug}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="Brand_Name_right">
                      {brandNamesMenus.map((item) => {
                        return (
                          <li>
                            <Link
                              to={{ pathname: `/shop/Brand/${item.name1}` }}
                              onClick={() => {
                                showProductItem(item.slug1);
                              }}
                            >
                              {item.slug1}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="Shop">
              <Link to="/shop" onClick={() => props.setSelectedCategory(null)}>
                Shop
              </Link>
            </div>
            <div className="dropdown">
              <button className="dropbtn_welcome">
                {!rememberMe ? "Welcome" : rememberMe.name}
              </button>
              {!rememberMe ? (
                <div className="dropdown-content">
                  <Link to="/login">Login</Link>
                  <Link to="/Signup">Sign Up</Link>
                </div>
              ) : (
                <div className="dropdown-content">
                  <Link
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {props.ShowRightSidebar && (
        <RightSidebar
          setShowRightSidebar={props.setShowRightSidebar}
          ShowRightSidebar={props.ShowRightSidebar}
          cartItems={props.cartItems}
          updateCartItems={props.updateCartItems}
          numberOfProduct={props.numberOfProduct}
          setNumberOfProduct={props.setNumberOfProduct}
        />
      )}
    </>
  );
};

export default Navbar;
