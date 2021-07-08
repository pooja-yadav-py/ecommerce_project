import React from "react";
import './Topheader.css';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import CallIcon from '@material-ui/icons/Call';

const Topheader = () => {
  return (
     <> 
    <nav className="navbar navbar-light bg-dark ">
      <div className="container-fluid d-flex justify-content-arround">
        <a className="navbar-brand text-light " href="#">
          <LocalShippingIcon style={{ fontSize: 15 }}/>&nbsp; Free Shipping
        </a>
        <a className="navbar-brand text-light" href="#">
          <PaymentIcon style={{ fontSize: 15 }}/>&nbsp; Payment Methods
        </a>
        <a className="navbar-brand text-light" href="#">
          <CallIcon style={{ fontSize: 15 }}/>&nbsp; Call us 951-999-9999
        </a>
      </div>
    </nav>

   

 


   </>
  );
};

export default Topheader;
