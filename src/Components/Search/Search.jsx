import React ,{useEffect}from "react";
import './Search.css'

import  Aos from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineSearch } from 'react-icons/ai'
const Search = () => {
    useEffect(() =>{
        Aos.init({
            duration:3000
        })
       
    },[])
    return (

        <div className="search">
            <div className="seeContainer Container">
                <h3 data-aos='fade-up' className="title">
                    which vehicle you are looking for ?
                </h3>


                <div className="searchDiv grid">
                    <input data-aos='fade-up' type="text" placeholder="Type" />
                    <input data-aos='fade-up' type="number" placeholder="Year" />
                    <input data-aos='fade-up' type="text" placeholder="Model" />
                    <input data-aos='fade-up' type="number" placeholder="price" />
                    <button data-aos='fade-up' className="btn primaryBtn flex">
                        <AiOutlineSearch className='icon' />
                        <span>
                            Search
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Search