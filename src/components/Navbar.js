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

  let menuRef = useRef();
  
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

  const showProductItem = (category) => {
    props.setSelectedCategory(category);
  };

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  const showCategoryItem = (categoryname) => {
   props.setSelectedCategory2(categoryname);
  };

  const sideBar=()=>{
    if(!rememberMe){
      history.push("/login");
    }else{
      setSideBar(true);
    }
    
  }

  const brandList = () => {
    if(!rememberMe){
      history.push("/login");
    }else{
      setBrandList(!showBrandList);
    }
  }
  
  return (
    <>
      <div>
        <nav className="bottom navbar navbar-light bg-light d-flex justify-content-betwwen">
          <a className="navbar-brand">
            <MenuIcon
              onClick={() => sideBar()}
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
                  <li>
                    <Link
                      to={{ pathname: `/shop/Category/Perfume` }}
                      onClick={() => {
                        showCategoryItem("Perfume");
                      }}
                    >
                      Perfume
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: `/shop/Category/Mens` }}
                      onClick={() => {
                        showCategoryItem("Men");
                      }}
                    >
                      Mens
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: `/shop/Category/Bags` }}
                      onClick={() => {
                        showCategoryItem("Beg");
                      }}
                    >
                      Bags
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: `/shop/Category/Shoes` }}
                      onClick={() => {
                        showCategoryItem("Shoes");
                      }}
                    >
                      Shoes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="navbar_right_items d-flex justify-content-end ">
            
            <div className="mt-1 mr-2 Right_side_bar"
              onClick={() => {
                if (!rememberMe) {
                  history.push("/login");
                } else {
                  props.setShowRightSidebar(true);
                }
              }}>
                <BiCart/>
                <bold><sup className="carditem_number">{props.cartItems ? props.cartItems.length : 0}</sup></bold> &nbsp; 

            </div>
            <div className="dropdown">
              <button
                className="Brandbtn"
                onClick={() => brandList()}
              >
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
                        props.setSelectedCategory2(null);
                      }}
                    >
                      See All
                    </Link>
                  </div>
                  <hr className="mt-1" />
                  <div className="Brand_Name d-flex mt-1">
                    <ul className="Brand_Name_left">
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Gucci` }}
                          onClick={() => {
                            showProductItem("Gucci");
                          }}
                        >
                          Gucci
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Polo` }}
                          onClick={() => {
                            showProductItem("Polo");
                          }}
                        >
                          Polo
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Ralph-Lauren` }}
                          onClick={() => {
                            showProductItem("Ralph Lauren");
                          }}
                        >
                          Ralph Lauren
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Nike` }}
                          onClick={() => {
                            showProductItem("Nike");
                          }}
                        >
                          Nike
                        </Link>
                      </li>
                    </ul>
                    <ul className="Brand_Name_right">
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Calvin-Klein` }}
                          onClick={() => {
                            showProductItem("Calvin Klein");
                          }}
                        >
                          Calvin Klein
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/Tommy-Hilfiger` }}
                          onClick={() => {
                            showProductItem("Tommy Hilfiger");
                          }}
                        >
                          Tommy Hilfiger
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/apple` }}
                          onClick={() => {
                            showProductItem("apple");
                          }}
                        >
                          apple
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{ pathname: `/shop/Brand/MERN` }}
                          onClick={() => {
                            showProductItem("MERN");
                          }}
                        >
                          MERN
                        </Link>
                      </li>
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
