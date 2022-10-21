import React from "react"
import "./index.css"

// import Appointment from "../Pages/appointments" 
// import Chat from "../Pages/chat" 
// import Labs from "../Pages/labs" 

// import MyAccount from "../Pages/myaccount"

// import Header from "../Header"

 


import {Link} from "react-router-dom"

import {MdOutlineHome} from "react-icons/md"
import {AiOutlineCalendar,AiOutlineMessage} from "react-icons/ai"
import {RiTestTubeLine} from "react-icons/ri"
import {BsFillPersonFill} from "react-icons/bs"




const Icons=()=>{
    
    return(
        <>  <div className="container">
        <div className="row">
        <div className="button-container col-12 mt-3">
            <Link to="/"><button className="btn"><>< MdOutlineHome size={25} /></> </button></Link>
            <Link to="/appointment"><button className="btn"><>< AiOutlineCalendar size={25}/></></button></Link>
            <Link to="/chat"><button className="btn"><>< AiOutlineMessage  size={25}/></></button></Link>
            <Link to="/lab"><button className="btn"><>< RiTestTubeLine  size={25}/></></button></Link>
            <Link to="/myaccount"><button className="btn"><>< BsFillPersonFill size={25}/></></button></Link>
           
          
          
        
          
    
 
   
 
   
</div>

        </div>
     
    </div>
   
  
      
    </>
    


       

    )
}

export default Icons