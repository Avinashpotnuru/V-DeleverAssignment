import React from "react"; 
import Slider from "react-slick";

import {discount} from "../data"
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



const Discount=()=>{
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
    
    return(
        <div className="discountblock">
        <h2>Discounts</h2>
          <Slider {...settings}>
       
       {discount.map((item) => (
        
          <div key={item.id} className='discountcard'> 
         <h5 className="dis-head">{item.title}</h5>
         <div className="offerblock">
            <img className="img-logo" src={item.linkImg} alt={`img-${item.id}`}/>
            <button>{item.discount}</button>

         </div>
        
        
        
        
        
 
         </div>

       
         
         ))}
 </Slider>
        </div>
      
       

    )
}
export default Discount