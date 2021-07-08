import React, {useState} from 'react';
import Menu from '../../components/Menu';
import Topheader from '../../components/Topheader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import "./Shop.css";

const Shop = (props) => {
console.log(props);
  const [items, setItems] = useState(Menu);
  
  return (
    <>
     {/* Our Menu Items List Will come here */}
     <Topheader/>
     <Navbar setShowRightSidebar={props.setShowRightSidebar}/>
    
   <div className=" box_shop ">
    <div className="row container box_shop_list col-12  ">
       {
          items.map((elem) => {
            const {id, image, title, companyName, description, price} = elem;
            return (
              <Link to={{
                    pathname: `/product/${title.split(" ").join("-")}`,
                    state: {
                           elem:elem,
                          //  ...props
                     },
              }}>
              
              <div className="card_shop" style={{width: '14rem'}}>
                  <img className="card-img-top" src={image} alt="Card image cap" />
                  <div className="card-body">
                      <h6 className="card-title">{title}</h6>
                      <p className="company_title text-muted">By <b>{companyName}</b></p>
                      <p className="card-text text-muted">{description}</p>
                      <p><b>${price}</b></p>
                  </div>
              </div>
              </Link>
            );
          })
        }
      </div>
      </div>
     
      <Footer/>
        

    </>
  );
}


export default Shop;
