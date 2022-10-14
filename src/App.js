import React  from 'react';
import "./App.css"
import Header from './components/Header';
import Appointments from './components/Appointments';
import Discount from './components/Discounts';
import Service from './components/Service';
import Icons from './components/Icons';


const App=()=>{
  return(
    <div className='App'>
      <Header/>
      <Service/>
      <Appointments/>
      <Discount/>
      <Icons/>
    </div>

  )
}
export default App;
