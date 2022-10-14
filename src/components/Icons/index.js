import React from "react"
import "./index.css"

import {MdOutlineHome} from "react-icons/md"
import {AiOutlineCalendar,AiOutlineMessage} from "react-icons/ai"
import {RiTestTubeLine} from "react-icons/ri"
import {BsFillPersonFill} from "react-icons/bs"




const Icons=()=>{
    
    return(
        <div className="button-container mt-3">
        <button className="btn" > < MdOutlineHome size={25} /></button>
        <button className="btn" > < AiOutlineCalendar size={25}/></button>
        <button className="btn" > < AiOutlineMessage  size={25}/></button>
        <button className="btn" > < RiTestTubeLine  size={25}/></button>
        <button className="btn" > < BsFillPersonFill size={25}/></button>
    </div>

    )
}

export default Icons