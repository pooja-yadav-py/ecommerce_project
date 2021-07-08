import React,{useState} from 'react';
import Topheader from '../../components/Topheader';
import Navbar from '../../components/Navbar';
import ImagePart from '../../components/ImagePart';
import Footer from '../../components/Footer';
import './Home.css';


const Home = (props) => {
    console.log(props);
    return (
        <>
            <Topheader />
            <Navbar cartItems={props.cartItems} ShowRightSidebar={props.ShowRightSidebar} setShowRightSidebar={props.setShowRightSidebar}/>
            <ImagePart />
            <Footer />
        </>
    )
}

export default Home;
