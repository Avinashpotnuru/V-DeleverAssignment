import React  from 'react';
import "./index.css"

import {MdNotificationsActive} from "react-icons/md"
import {AiOutlineRight} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
 

const Header=()=>{
    return(
        <div>
        <div className="Arrange-items-container">
            <h1>Hey, <span className='slide'> Jullia<span role="img" aria-label="Love">🙂</span></span></h1>
            <button className="button-block-1" style={{height:"50px",width:"50px", backgroundcolor:"#D9D9D9"}}><MdNotificationsActive/></button>
        </div>
        <div className="bg-1-color">
            <div className="image-block-container">
                <img  src="./images.png" className="img1-block" alt="synevo" />
                <p className='head-para'>Your Blood Test is ready! </p>
            </div>
            <AiOutlineRight className="margin-2"/>
        </div>
        <div className="div-block-container">
            <input placeholder="Search for doctors, labs ,etc...."  type="text"/>
            <BiSearch className="margin-1" style={{padding:"10px",width:"5vw",height:"7vh" }}/>

        </div>
        
    </div>

      
      

    )
}

export default Header

