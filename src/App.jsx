import React, { Component } from "react";
import './App.css';
import Auction from "./Components/Auction/Auction";
import Navbar from "./Components/Navbar/Navbar";
import Head from "./Components/Head/Head";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import Sellers from "./Components/Sellers/Sellers";
import Trending from "./Components/Trending/Trending";



const App =() =>{
  return(
    <div className='title'>

      <Navbar/>
      <Head/>
      <Search/>
      <Trending/>
      <Sellers/>
      <Auction/>
      <Review/>
      <Footer/>
      
    </div>

  )
}

export default App