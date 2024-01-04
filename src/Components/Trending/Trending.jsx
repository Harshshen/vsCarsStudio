import React,{useEffect} from "react";
import './Trending.css'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import car1 from '../../Assets/car1.jpg'
import gtr from '../../Assets/gtr.jpg'
import gwagon from '../../Assets/gwagon.jpg'
import valk from '../../Assets/valk.jpg'
import DBC from '../../Assets/DBC.jpg'
import  Aos from 'aos'
import 'aos/dist/aos.css'



const Trending =() => {

useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])

    return(
        <div className="trending section">
            <div className="secContainer container">
                <div className="secHeading flex ">
                    <h3 data-aos='fade-up' className="secTitle">
                        Trending near you
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className="icon lefticon"/>
                        <BsArrowRightShort className="icon righticon"/>

                    </div>
                </div>

                <div className="carContainer grid">

                   { /*single car1 div*/}
                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used in 2020 premium
                        </h5>
                        <span className="miles">
                            1145 Miles
                        </span>
                        <span className="AWD">
                            
                            koenisegg AWD-5
                        </span>
                        <div className="price_seller fix">
                            <span className="price">
                                $500,000
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>
                   

                    { /*single car2 div*/}
                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={gtr} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used in 2022 powerfull car
                        </h5>
                        <span className="miles">
                            5000 Miles
                        </span>
                        <span className="AWD">
                            Nissan GTr SuperCharge v12
                        </span>
                        <div className="price_seller fix">
                            <span className="price">
                                $250,000
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>


                    { /*single car3 div*/}
                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={valk} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Conceptual Car 2020 
                        </h5>
                        <span className="miles">
                            1000 Miles
                        </span>
                        <span className="AWD">
                            Aston Martin Valkrie
                        </span>
                        <div className="price_seller fix">
                            <span className="price">
                                $1,500,000
                            </span>
                            <span className="seller">
                                Only 1 in World 
                            </span>
                        </div>
                    </div>

                    { /*single car4 div*/}
                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={gwagon} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 
                        </h5>
                        <span className="miles">
                            2000 Miles
                        </span>
                        <span className="AWD">
                            Mercedes G-Wagon
                        </span>
                        <div className="price_seller fix">
                            <span className="price">
                                $250,000
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>


                    { /*single car5 div*/}
                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={DBC} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Powerfull 2013 v12
                        </h5>
                        <span className="miles">
                            500 Miles
                        </span>
                        <span className="AWD">
                            Aston Martin DBC concept Car
                        </span>
                        <div className="price_seller fix">
                            <span className="price">
                                $1,000,000
                            </span>
                            <span className="seller">
                                Only 1 in World
                            </span>
                        </div>
                    </div>


                </div>
            </div> 
        </div>
    )
}

export default Trending