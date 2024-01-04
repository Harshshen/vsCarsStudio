import React,{useEffect} from "react";
import './Auction.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import auc1 from '../../Assets/auc1.jpg';
import auc2 from '../../Assets/auc2.jpg';
import auc3 from '../../Assets/auc3.jpg';
import auc4 from '../../Assets/auc4.jpg';
import auc5 from '../../Assets/auc5.jpg';
//aos import
import  Aos from 'aos'
import 'aos/dist/aos.css'



const Auction = () => {

    useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])
    return (

        <div className="auction section">
            <div className="secContainer container">
                <div className="secHeading flex ">
                    <h3  data-aos='fade-right' className="secTitle">
                        Auction near you
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className="icon lefticon" />
                        <BsArrowRightShort className="icon righticon" />

                    </div>
                </div>

                <div className="carContainer grid">

                    { /*single car1 div*/}
                    <div  data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={auc1} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            BrandNew
                        </h5>
                        <span className="miles">
                            0 Miles
                        </span>
                        <span className="AWD">

                            BMW M competetion
                        </span>
                        <div className="price_buyBtn fix">
                            <span className="price">
                                $500,000-700,000
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>


                    { /*single car2 div*/}
                    <div data-aos='fade-up'  className="singleCar grid">
                        <div className="imgDiv">
                            <img src={auc2} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used in 2018
                        </h5>
                        <span className="miles">
                            1000 Miles
                        </span>
                        <span className="AWD">
                            Audi R8
                        </span>
                        <div className="price_buyBtn fix">
                            <span className="price">
                                $250,000-500,000
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>


                    { /*single car3 div*/}
                    <div data-aos='fade-up'  className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={auc3} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Conceptual Car 2020
                        </h5>
                        <span className="miles">
                            1000 Miles
                        </span>
                        <span className="AWD">
                            Audi Conceptual
                        </span>
                        <div className="price_buyBtn fix">
                            <span className="price">
                                $2,500,000 - 3,000,000
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    { /*single car4 div*/}
                    <div  data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={auc4} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2012
                        </h5>
                        <span className="miles">
                            2000 Miles
                        </span>
                        <span className="AWD">
                            Lamborgini avantador
                        </span>
                        <div className="price_buyBtn fix">
                            <span className="price">
                                $500,000-1,000,000
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>


                    { /*single car5 div*/}
                    <div  data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={auc5} alt="car Image" />
                        </div>
                        <h5 className="carTitle">
                            v12 2013
                        </h5>
                        <span className="miles">
                            1050 Miles
                        </span>
                        <span className="AWD">
                            Ford Mustang gt
                        </span>
                        <div className="price_buyBtn fix">
                            <span className="price">
                                $400,000-900,000
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Auction