import React  from 'react';

import { useState } from "react";

import "./pages.css"

const Appointment = () => {
  const [setInput,setAppointInput]=useState({personName:"",compliant:"",slot:""})

  const [list,setList]=useState([])
  
  const {personName,compliant,slot}=setInput
  
  const eventHandler=(e)=> {
    setAppointInput({...setInput,[e.target.name]:e.target.value})
   

    
  }
  console.log(setInput)


  const SetData=(e)=>{
    e.preventDefault()
    setList([...list,setInput])
    
   
    console.log(list)

    


  }


 
    return (
      <div className='conatiner'>
        <div className='row'>
        <div className='appointmentblock caption-top col-12'>
        <h2>Book ur slot</h2>
        <form className='col-10' onSubmit={SetData}>
          <p>Name</p>
          <input className='col-10' type="text" name='personName' value={personName} onChange={eventHandler} placeholder="entername"  />
          <p>compliant</p>
         <textarea className='col-10' type="text" onChange={eventHandler} rows="4" name='compliant'  value={compliant} placeholder='enter your compliant here'></textarea>
          <p>select slot</p>
          <input className='col-10' onChange={eventHandler} type="date" name="slot" value={slot}/>
          <br/>
          <div className='text-center'>
          <button className='mt-3 btn btn-info align-center' type='submit'>submit</button>

          </div>
          
         
          
        </form>
        <ul>
          {list.map(item=>(
            <li>
              <h6 style={{color:"blue"}}>{item.personName}</h6>
              <p style={{color:"blue"}}>{item.compliant}</p>
              <p style={{color:"blue"}}>{item.slot}</p>
              </li>

          )

          )}
        </ul>
    
        
        
        
        
        

      </div>


        </div>

      </div>
      
    );
  };
  
export default Appointment  