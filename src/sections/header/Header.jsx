import React from 'react';
import Profile from '../../assets/ali.jpg';
import data from './Head_data';
import './header.css'
function Header() {
  return (
     <header id='header'>
        <div className='container head_container'>
              <div className='myphoto'>
                  <img src= {Profile} alt="headerphoto"/>
              </div>
        
                      <h3> Muhammad Ali</h3>
                      <p> Experienced coding bootcamp graduate with background in various coding 
                      languages and building websites from the ground up, looking to apply for the 
                      role of Developer. Professional strengths include creative problem-solving, 
                      written and verbal communication, and time management.</p>
              <div className='head_button'>
                <a href='#contact' className='btn black'> Let's talk</a>
                <a href='#portfolio' className='btn light'> My work</a>
              </div>
              <div className='head_social'>
          
                {data.map( items =>  <a  key={items.id } href={items.link} target = '_blank' rel='noopener noreferrer'> {items.icon}</a>)}
                </div>
        </div>
     </header>
  )
}

export default Header