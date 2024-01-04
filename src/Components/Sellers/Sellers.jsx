import React,{useEffect} from "react";
import './Sellers.css';
//aos import
import  Aos from 'aos'
import 'aos/dist/aos.css'
//importing seller image from assests
import seller1 from '../../Assets/seller1.jpg';
import seller2 from '../../Assets/seller2.png';
import seller3 from '../../Assets/seller3.png';

const Sellers =() => {
    
    useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])

    return(

        <div className="sellers section">

            <div className="secContainer container">
                <div className="secHeading grid">
                  <h3 data-aos='fade-right' data-aos-duration= ' 30000' className="secTitle">
                    Explore top seller in town 
                  </h3>

                  <p>Harsh Shende holds guiness world record for beign greatest salesman in the World</p>
                </div>

                <div className="sellersContainer grid">
                    {/* single seller section */}
                    <div data-aos='fade-up' data-aos-duration= ' 30000' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller1} alt="salesman" className="img" />
                        </div>
                        <span className="infoDiv">
                            <h4 className="name">
                                mcLaren
                            </h4>
                            <p>from $100k</p>
                        </span>
                    </div>

                    <div  data-aos='fade-up' data-aos-duration= ' 30000' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller2} alt="salesman" className="img" />
                        </div>
                        <span className="infoDiv">
                            <h4 className="name">
                                GTr
                            </h4>
                            <p>from $100k</p>
                        </span>
                    </div>

                    <div data-aos='fade-up' data-aos-duration= ' 30000' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller3} alt="salesman" className="img" />
                        </div>
                        <span className="infoDiv">
                            <h4 className="name">
                                Mercedes
                            </h4>
                            <p>from $80k</p>
                        </span>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Sellers