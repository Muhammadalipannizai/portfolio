import React from 'react'
import './education.css';
import edu from './edu';
import Cards from '../../components/Cards';
function Education() {
  return (
   <section id='education'>
        <h2> Education</h2>
    <div className='container education_container'>
        {
            edu.map((item,index) => (
                <Cards  key={index}  className= 'education primary'>
                <div className='edu_icon'> {item.icon}</div>
                    <div className='univeristy'> <h4>{item.university}</h4>
                    <p>{item.degree}</p>
                   <small> {item.date}</small>
                    </div>
                </Cards>
            ) )
        }
    </div>
   
    <div className='certification_container'>
    <h3> Courses & Certifications</h3>
        <div  className='certificate'>
            <h4> The Complete 2023 Web Development Bootcamp</h4>
            <a href='https://www.udemy.com/certificate/UC-c2b9a204-1367-4fb9-b748-9a42c5c92992/' className='btn black'> Udemy Certificate </a>
     
        </div>
    </div>
   </section>
  )
}

export default Education