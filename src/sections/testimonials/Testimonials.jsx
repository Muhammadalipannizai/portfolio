import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


import testimonialsData from './data'
import TestimonialsComponent from "./TestimonialsComponent";
import './testimonials.css'

function Testimonials() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  return (
 
      <section id='testimonials'>
     <h2> Testimonials</h2>
     <p>
      These are unbiased testimonials from some of my clients
     </p>
     <div className=" container " data-aos = 'zoom-in'>
        <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints = {{
                601 : {slidesPerView : 2},
                1025 :{ slidesPerView : 3}
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay,Pagination]}
              autoplay={true}
              className="mySwiper"
            >
               {
                testimonialsData.map(testimonial => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialsComponent testimonialP ={testimonial} />
                  </SwiperSlide>
                    )
                       )
               }
          </Swiper>
   
   
     </div>
    </section>
   
  )
}

export default Testimonials