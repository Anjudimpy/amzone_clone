import React from "react";
import { Carousel }  from 'react-responsive-carousel';
import ship from '../images/ameee/ship.jpg';
import shoe from '../images/ameee/shoe.jpg';
import shoe1 from '../images/ameee/shoe1.jpg';
import slideimage from '../images/ameee/slideimage.jpg';
import Image from "next/image";

const Banner = () =>{
    return(
        <div className="relative">
             <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={1000}>
                <div>
                    <Image priority src={ship} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={slideimage} alt="sliderImg" />
                    
                </div>
                {/* <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div> */}
                <div>
                    <Image src={shoe} alt="sliderImg" />
                    
                </div>
               
            </Carousel>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
        </div>
    );
   
};

export default Banner;