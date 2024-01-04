import React,{useEffect}  from "react";
import './Footer.css'

//aos import
import  Aos from 'aos'
import 'aos/dist/aos.css'

const Footer =() => {
    useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])

    return(

        <div className="footer">
            <div className="footerContainer container">
                <div data-aos='fade-up'className="footerMenuDiv grid" >
                    {/* singleGrid Element1 */}
                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">
                            About
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                How it Works
                            </li>
                            <li className="footerLi">
                                Careeres
                            </li>
                            <li className="footerLi">
                                Affiliates
                            </li>
                            <li className="footerLi">
                                Media
                            </li>
                        </ul>
                    </div>

                    {/* singleGrid Element2 */}

                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">
                            Become seller
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Add vehicles
                            </li>
                            <li className="footerLi">
                                Resources Center
                            </li>
                            <li className="footerLi">
                                Bonds
                            </li>
                            <li className="footerLi">
                                Release Dates
                            </li>
                        </ul>
                    </div>

                    {/* singleGrid Element3 */}

                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">
                            Community
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Recommendations
                            </li>
                            <li className="footerLi">
                                Gift Cards
                            </li>
                            <li className="footerLi">
                                Top Ups
                            </li>
                            <li className="footerLi">
                                selling
                            </li>
                        </ul>
                    </div>

                    {/* singleGrid Element4*/}

                    <div data-aos='fade-up'className="singleGrid">
                        <span className="footerTitle">
                            Booking Support
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                               updates for Covid-19
                            </li>
                            <li className="footerLi">
                                Help Center
                            </li>
                            <li className="footerLi">
                                Garages
                            </li>
                            <li className="footerLi">
                                Trust&Safety
                            </li>
                        </ul>
                    </div>

                </div>

                {/* footer  lower section */}
                <div data-aos='fade-up' className="lowerSection grid">
                    <p>2024 All Rights Reserved</p>
                    <blockquote>Harshshen Production</blockquote>
                    <span>contact: harshshendeofficial@gmail.com</span>
                </div>
             </div>
        </div>
    )
}

export default Footer