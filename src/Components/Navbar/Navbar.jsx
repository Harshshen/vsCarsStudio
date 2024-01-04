import React, {useState} from "react";
import './Navbar.css';
import {TbGridDots} from "react-icons/tb";
import {IoIosCloseCircle} from "react-icons/io";

//importing images

import logo from '../../Assets/logo.png'

const Navbar =() => {
//statement to hold navbar statw
    const[navbar, setNavbar]=useState('navbar')

    //function to show navvbar on smaller screens

    const showNavbar =() => {
        setNavbar('navbar showNavbar')
    }  

    //function to close navbar 
    const removeNavbar =() => {
        setNavbar('navbar ')
    }

    //function to add a bg to the navbar when we scroll upto certain height
    const[header,setHeader] =useState('header')
    const addBg = () =>{
        if(window.scrollY >= 20){
            setHeader(' header addBg')
        }
    }

    window.addEventListener('scroll' ,addBg ) 
    return(

        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="car logo" className="logo"/>
            </div>



            <div className={navbar}>
                <ul className="menu ">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link"> used cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link"> new cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link"> Auction cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link"> sell</a>
                    </li>
                </ul>
                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
            </div>
            <div className="signUp flex" > 
            <div className="text">Sign Up</div>
            <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar}/>
            
            </div>
        </div>
    )
}

export default Navbar