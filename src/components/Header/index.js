import React  from 'react';
import "./index.css"

import {MdNotificationsActive} from "react-icons/md"
import {AiOutlineRight} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
 

const Header=()=>{
    return(
        <div className='container'>
            <div className='row'>
            <div className="Arrange-items-container col-12 ">
            <h1 className='col-9'>Hey, <span className='slide'> Jullia<span role="img" aria-label="Love">🙂</span></span></h1>
            <button className="button-block-1 col-3" style={{height:"50px",width:"50px", backgroundcolor:"#D9D9D9"}}><MdNotificationsActive/></button>
        </div>
        <div className="bg-1-color col-12">
            <div className="image-block-container col-10">
                <img  src="./images.png" className="img1-block col-5" alt="synevo" />
                <p className='head-para col-5'>Your Blood Test is ready! </p>
            </div>
            <AiOutlineRight className="margin-2 col-2"/>
        </div>
        <div className="div-block-container col-12">
            <input className='col-10' placeholder="Search for doctors, labs ,etc...."  type="text"/>
            <BiSearch className="margin-1 col-2" style={{padding:"10px",width:"7vw",height:"7vh"}}/>

        </div>
            </div>
       
        
    </div>

      
      

    )
}

export default Header

