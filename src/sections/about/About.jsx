import React from 'react'
import Profile from '../../assets/ali.jpg';
import './about.css';
import CV from '../../assets/cv.pdf';
import data from './data';
import Cards from '../../components/Cards'; 
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function About() {
  return (
     <section id='about'>
      <div className='container about_container'>
       
        <div className='about_left'>
            <div className='image_about'>
              <img src= {Profile} alt = 'aboutMe'></img>
            </div>
        </div>

        <div className='about_right'>
         <h2> About me </h2>
          <div className='about_cards'>
            { data.map( item => (
              <Cards key ={item.id} className = ' card_component'>
                <span  className='icon_about'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Cards>
            )
            )}
          </div>
          <p>
          Experienced coding bootcamp graduate with background in various coding languages and
           building websites from the ground up, looking to apply for the role of Developer.
           Professional strengths include creative problem-solving, written and verbal communication, 
           and time management.
          </p>
          <a href={CV} download  className='btn black' > <FileDownloadIcon/>Download CV</a>  

        </div>
      </div>
      </section>
      
  )
}

export default About