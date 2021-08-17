import React, { useState, useEffect } from "react";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import "./Shop.css";

const Shop = (props) => {
  console.log(props)
  const history = useHistory();
  const [items, setItems] = useState([]);
  // const [products,setProducts]= useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  
  const rememberMe = localStorage.getItem("user");

  if (!rememberMe) {
    history.push("/login");
  }

  useEffect(()=>{
   loadData();
  },[]);

  const loadData = async ()=>{
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setItems(data.result);
    setSelectedProducts(data.result)
    setIsDataLoading(false);
    console.log(data.result);
  }
  
  useEffect(() => {
    if (!props.selectedCategory) {
      setSelectedProducts(items);
      return;
    }
    //get seleted item from brand 
    setSelectedProducts(
      items.filter((item) => item.companyName === props.selectedCategory)
    );
  }, [props.selectedCategory]);

  useEffect(() => {
    if (!props.selectedCategorySideBar) {
      setSelectedProducts(items);
      return;
    }
    //get selected item from sidebar
    setSelectedProducts(
      items.filter((item) => item.category == props.selectedCategorySideBar)
    );
  }, [props.selectedCategorySideBar]);

  let htmlContentNoData = null
  if( isDataLoading ) {
    htmlContentNoData = "Please wait data is loading...";
  } else if(!isDataLoading && selectedProducts.length <= 0) {
    htmlContentNoData = "🙅 There is no products in category"+ props.selectedCategory+" 🙅";
  }

  const removeProduct = () => {
   alert("hello this is remove button")
  }

  const editProduct = () => {
    alert("hello this is edit button")
  }


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
        setSelectedCategorySideBar={props.setSelectedCategorySideBar}
        selectedCategorySideBar={props.selectedCategorySideBar}
      />

      <div className=" box_shop">
        <div className="row container box_shop_list col-12  ">
          {!htmlContentNoData ? (
            selectedProducts.map((elem) => {
              const {
                selectedFile,
                title,
                companyName,
                description,
                price
              } = elem;
              return (
                
                  <div className="card_shop" style={{ width: "14rem" }} >
                  <div className="card_innerpart">
                  <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/product/${title.split(" ").join("-")}`,
                    state: { elem: elem },
                  }}
                >
                    <img
                      className="card-selectFile-top"
                      src={selectedFile}
                      alt="Card selectFile cap"
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
                    </Link>
                    </div>
                    <div className="d-flex justify-content-around ">
                    <div className="product_delete text-danger" onClick={removeProduct}><BsFillTrashFill/> Remove</div> 
                    <div className="product_edit" onClick={editProduct}><TiEdit/> Edit</div>
                    </div>
                  </div>
                 
                
              );
            })
          ) : (
            <div className="empty_Selected_Product">
              {htmlContentNoData}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
