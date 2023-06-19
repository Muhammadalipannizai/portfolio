import React from 'react'
import Cards from '../../components/Cards';
import './testimonials.css';


function TestimonialsComponent(props) {
  return (
   <Cards className = 'light'>
      <p>{props.testimonialP.quote}</p>
      <div className='testimonials_clients'>
      <div className="testimonial_images">
        <img src={props.testimonialP.avatar} alt = 'testimonials avatar'/>
      </div>
      <div className="client_details">
        <h6>{props.testimonialP.name}</h6>
        <small>{props.testimonialP.profession}</small>
      </div>
      </div>
   </Cards>
  )
}

export default TestimonialsComponent