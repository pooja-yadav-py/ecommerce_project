import React,{useState} from 'react';
import '../index.css';
import './index.css';
import { Link,NavLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';



const Navbar = () => {
  const [showSideBar, setSideBar] = useState(false);
  const [showBrandList, setBrandList] = useState(false);
    return (
        <>
        <div>
            <nav className="bottom navbar navbar-light bg-light d-flex justify-content-around">
              <a className="navbar-brand" ><MenuIcon onClick={() => setSideBar(true)}/><sup>MERN Store</sup></a>
              
              { showSideBar && 
              <div className="SideBar">
        <button className="btn1" onClick={() => setSideBar(false)}>x</button>
        <hr/>
        <div className="header">
          Shop By Category
        </div>
        <div className="Shop_List">
         <ul>
             <li><Link to="#">Perfume</Link></li>
             <li><Link to="#">Mens</Link></li>
             <li><Link to="#">Bags</Link></li>
             <li><Link to="#">Shoes</Link></li>
         </ul>
         </div>
         </div> }              
              <div className="navbar_right_items d-flex justify-content-end ">   
              <LocalMallIcon style={{ fontSize: 15 }}/>
              <div className="dropdown">
                <button className="Brandbtn" onClick={() => setBrandList(!showBrandList)}>Brands
 
                {showBrandList ? <ArrowDropDownIcon /> : <ArrowDropUpIcon /> }
                 </button>
                { showBrandList && 
                <div className="Brands_product">
                <div className="Brand_header d-flex justify-content-between pt-2">
                <h6 className="ml-4">Shop By Brands</h6>
                <Link>See All</Link>
                </div>
                <hr className="mt-1"/>
                <div className="Brand_Name d-flex mt-1">
                <ul className="Brand_Name_left">
                    <li><Link to="#">Gucci</Link></li>
                    <li><Link to="#">Polo</Link></li>
                    <li><Link to="#">Ralph Lauren</Link></li>
                    <li><Link to="#">Nike</Link></li>
                </ul>
                <ul className="Brand_Name_right">
                    <li><Link to="#">Calvin Klein</Link></li>
                    <li><Link to="#">Tommy Hilfiger</Link></li>
                    <li><Link to="#">ppple</Link></li>
                    <li><Link to="#">MERN</Link></li>
                </ul>
                </div>
            </div>
 }
                </div>
              <div className="Shop"><a href="#">Shop</a></div> 
              <div class="dropdown">
                <button class="dropbtn">Welcome</button>
                <div class="dropdown-content">
                    <a href="#">Login</a>
                    <a href="#">Logout</a>
                    
                </div>
                </div>
              </div>
            </nav>
        </div>

        




  </>
    );
}


export default Navbar;
