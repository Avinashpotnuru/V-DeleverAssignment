import React  from 'react';
import "./App.css"

import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Appointment from './components/Pages/appointments';
import Chat from './components/Pages/chat';

import Labs from './components/Pages/labs';
import MyAccount from './components/Pages/myaccount';



const App=()=>{
  return(
    <div className='App'>
    
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/appointment" exact element={<Appointment/>}/>
        <Route path="/chat" exact element={< Chat/>}/>
        <Route path="/lab" exact element={<Labs/>}/>
        <Route path="/myaccount" exact element={<MyAccount/>}/>

    </Routes>
      
    </div>

  )
}
export default App;
