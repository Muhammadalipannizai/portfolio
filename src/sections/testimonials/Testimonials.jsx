
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


import testimonialsData from './data'
import TestimonialsComponent from "./TestimonialsComponent";
import './testimonials.css'

function Testimonials() {
  return (
 
      <section id='testimonials'>
     <h2> Testimonials</h2>
     <p>
      These are unbiased testimonials from some of my clients
     </p>
     <div className=" container ">
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