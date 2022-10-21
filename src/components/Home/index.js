import React  from 'react';
import "./index.css"
import Header from '../Header';
import Appointments from '../Appointments';
import Discount from '../Discounts';
import Service from '../Service';
import Icons from '../Icons';


const Home=()=>{
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
export default Home;
