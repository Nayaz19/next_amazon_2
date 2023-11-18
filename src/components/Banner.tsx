import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import slider_1 from '../images/slider/sliderImg_1.jpg'
import slider_2 from '../images/slider/sliderImg_2.jpg'
import slider_3 from '../images/slider/sliderImg_3.jpg'
import slider_4 from '../images/slider/sliderImg_4.jpg'


const Banner = () => {
  return (
   <div className='relative'>
    
    <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
    <div>
    
       <Image priority src={slider_1} alt='' />
       
    </div>
    <div>
    <Image src={slider_2} alt='' />
       
    </div>
    <div>
    <Image src={slider_3} alt='' />
        
    </div>
    <div>
    <Image src={slider_4} alt='' />
        
    </div>
    
    </Carousel>
    <div className='w-full h-20 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0' />
    </div>
  )
}

export default Banner
