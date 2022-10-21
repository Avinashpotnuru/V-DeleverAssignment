
import React  from 'react';
import Slider from "react-slick";

import {dataDigitalBestSeller} from "../data"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }



function Appointments() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   
    // infinite: false,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    // initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
         
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <div className='container'>
      <div className='row'>
      <div className='mainbg col-12'>
    <h2 className='mb-3 col-12 mb-4'>Upcoming Appointments</h2>
     <Slider {...settings}>
       
       {dataDigitalBestSeller.map((item) => (
         <div key={item.id} className='card col-12 d-flex'> 
        
        
         <img className='logoo col-4' src={item.linkImg} alt={`img${item.id}`}/>
         <div className='details d-flex flex-column col-8'>
         <h6 className='headingg col-8' >{item.title}</h6>
         <p className='doc-para col-8'>{item.category}</p>
         <div className='buttons col'>
         <button className='icon-button col-3'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
   <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
 </svg></span>{item.date}</button>
        <button className='col-3'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
 </svg></span>{item.time}</button>
 
         </div>
        
        </div>
 
         </div>
         ))}
 </Slider>
    </div>

      </div>

    </div>
    
    
      

    
    
   

     
    
  );
}

export default Appointments;
