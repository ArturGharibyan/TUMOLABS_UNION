import React from "react";
import Header from "./Header"
import DigitalPlatform from "./DigitalPlatform";
import FedbackAndContainers from "./FedbackAndContainers";
import Benefit from "./Benefit";
import Footer from "./Footer";



const Home =() =>{
    return(
        <>
       
            <DigitalPlatform/>
            <FedbackAndContainers/>
            <Benefit/>
            <Footer/>
        </>
    )
}

export default Home