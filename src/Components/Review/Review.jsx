import React,{useEffect}  from "react";
import './Review.css';
//import logos
import {BsArrowLeftShort} from 'react-icons/bs'
import { BsArrowRightShort } from "react-icons/bs";
import {AiFillStar} from 'react-icons/ai'

//import Images
import person1 from '../../Assets/person1.jpg'
import cadillac from'../../Assets/cadillac.png'
import  mustang from '../../Assets/mus.jpg'
import person2 from '../../Assets/person2.jpg'
import urus from '../../Assets/urus.jpg'
import person3 from '../../Assets/person3.jpg'

//aos import
import  Aos from 'aos'
import 'aos/dist/aos.css'


const Review =() => {

useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])
    return(

        <div className="review section">
            <div className="secContainer container">
                <div data-aos='fade-right' className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>
                </div>


                {/* review container */}
                <div className="reviewContainer grid">
                    {/* single review */}
                    <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={cadillac} alt="" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 cadillac
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit facilis fugit possimus exercitationem dolores, unde excepturi aut repellendus sunt atque ducimus 
                            nulla impedit tempora quo sint veritatis eligendi cum.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={person1} alt="reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        jackiechan
                                    </span>
                                    <p>chief Editor</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className="icon" />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                    
                     {/* single review */}
                     <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={urus} alt="" />
                        </div>
                        <h5 className="reviewTitle">
                            2018 Lamborgini urus
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit facilis fugit possimus exercitationem dolores, unde excepturi aut repellendus sunt atque ducimus 
                            nulla impedit tempora quo sint veritatis eligendi cum.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={person2} alt="reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        lu chi
                                    </span>
                                    <p>Professor</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className="icon" />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                     {/* single review */}
                     <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={mustang} alt="" />
                        </div>
                        <h5 className="reviewTitle">
                            2012 mustang gt
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit facilis fugit possimus exercitationem dolores, unde excepturi aut repellendus sunt atque ducimus 
                            nulla impedit tempora quo sint veritatis eligendi cum.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={person3} alt="reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        shi ji pin
                                    </span>
                                    <p>Politician</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className="icon" />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Review