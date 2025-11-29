import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { Outlet } from "react-router"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Chatbot from "./components/chatbot/chatbot"





export default function App() {

  useEffect(() => {
    AOS.init({
     
      duration: 1000, 
      once: false, 
    });

    

  }, []);


  return (
    <>
        <Navbar/>
        <Outlet/>
        <Chatbot/>
        <Footer/>
    </>
  )
}


