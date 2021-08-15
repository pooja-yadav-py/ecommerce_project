import React, { useState } from "react";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./createProduct.css";

const CreateProduct = (props) => {  
  const rememberMe = JSON.parse(localStorage.getItem("user"));
  
  const [res,setRes] = useState("");
  const [inputField, setInputField] = useState({
    title: "",
    companyName: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    selectedFile: "",
    userId:""
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputField({ ...inputField, [name]: value ,userId:rememberMe.id });
  };

  const handleInputFile = async (event) => {
    const name = event.target.name;
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setInputField({ ...inputField, [name]: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  console.log(inputField);

  const createFormSubmit = async (e) => {
    //check for all input filed are fill
    if(!inputField.title || !inputField.companyName || !inputField.category || !inputField.description || !inputField.price || !inputField.quantity || !inputField.selectedFile ){
      alert("plz fill all filed");
      return;
    }else{
      alert("congrate form submit");
     
    }
    
    const response = await fetch(`http://localhost:8080/createProduct`, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        title:inputField.title,
        companyName:inputField.companyName,
        category:inputField.category,
        description:inputField.description,
        price:inputField.price,
        quantity:inputField.quantity,
        selectedFile:inputField.selectedFile,
        userId:inputField.userId
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    
    let data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Topheader />
      <Navbar
        setShowRightSidebar={props.setShowRightSidebar}
        ShowRightSidebar={props.ShowRightSidebar}
        cartItems={props.cartItems}
        updateCartItems={props.updateCartItems}
        setSelectedCategory={props.setSelectedCategory}
        setSelectedCategorySideBar={props.setSelectedCategorySideBar}
        selectedCategorySideBar={props.selectedCategorySideBar}
      />
      {/* <div>
        <h1>{inputField.title} and {inputField.companyName} and {inputField.category} and 
        {inputField.description} and {inputField.price} and {inputField.quantity}</h1>
        <img src = {inputField.selectedFile} width="100px"/>
      </div> */}
      <img src = {inputField.selectedFile} width="100px"/>
      <div className="parent_container">
        <div className="child_container">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            onChange={handleInput}
            value={inputField.title}
          />
          <div className="selectCategory">
            <div>
              <label>CompanyName</label>
              <select name="companyName" onChange={handleInput}>
                <option value="Gucci">Gucci</option>
                <option value="Calvin Klein">Calvin Klein</option>
                <option value="tommy Hilfiger">tommy Hilfiger</option>
                <option value="MERN">MERN</option>
                <option value="Polo">Polo</option>
                <option value="Nike">Nike</option>
                <option value="Ralph Lauren">Ralph Lauren</option>
                <option value="apple">apple</option>
              </select>
            </div>
            <div>
              <label>Category</label>
              <select name="category" onChange={handleInput}>
                <option value="Shoes">Shoes</option>
                <option value="Beg">Beg</option>
                <option value="Man">Man</option>
                <option value="Perfume">Perfume</option>
              </select>
            </div>
          </div>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter Description"
            rows="3"
            onChange={handleInput}
            value={inputField.description}
          />
          <label>Price</label>
          <input
            type="number"
            min="1"
            name="price"
            id="price"
            placeholder="Enter Price"
            onChange={handleInput}
            value={inputField.price}
          />
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            name="quantity"
            id="quantity"
            placeholder="Enter Quantity"
            onChange={handleInput}
            value={inputField.quantity}
          />
          <label>Select Image:</label>
          <input
            type="file"
            name="selectedFile"
            id="image"
            onChange={handleInputFile}
          />
          <button className="create_product_btn" onClick={createFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProduct;
