import React,{useEffect} from "react";
import './Head.css'

//importing homepage image
import homeImage from '../../Assets/homeimg.jpg'

//importing Aos for scrolling and scroll reveaal4
//data Aos attribute is used like when home screen comes the text also come in animation giving pleasefully look
//to site

import  Aos from 'aos'
import 'aos/dist/aos.css'


const Head =() => {

    //initializing aos here and setting default animation duration

    useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])
    return(

        <div className="home">
            <div className="seeContainer">
                <div  data-aos='fade-up' className="homeText">
                    <span  className="homeSpan">
                        Meet your First Hypercar
                        
                    </span>
                    <h1 className="homeTitle">
                        Buggati Vision hyperCar
                    </h1>
                    <div className="btns flex">
                        <button data-aos='fade-rigth' className="btn"> More Details</button>
                        <button data-aos='fade-left' className="btn primaryBtn">Test Drive</button>
                    </div>
                </div>

                <div data-aos='fade-down-right'className="homeImage">
                    <img src={homeImage} alt="Home image" />
                </div>
            </div>
        </div>
    )
}

export default Head