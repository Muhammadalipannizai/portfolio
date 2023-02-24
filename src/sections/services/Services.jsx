import React from 'react'
import './services.css';
import data from './data';
import Cards from '../../components/Cards';
function Services() {
  return (
    
      <section id='services'>
      <h2>My Services</h2>
      <p> I give you best services below</p>
      <div className=' container services_container'>
          { data.map( (items) => (
            <Cards key = {items.id} className = ' services light'>
            <div className='services_icon'> {items.icon}</div>
            <div className='details'> <h5>{items.title}</h5>
              <p>{items.desc}</p></div> 
            </Cards>
          ))}
        </div>
 
    </section>
   
  )
}

export default Services