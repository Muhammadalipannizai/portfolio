import React from 'react';
import Profile from '../../assets/ali.jpg';
import data from './Head_data';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Header() {

  useEffect(() => {
   AOS.init({
     duration: 2000,
   });
 }, []);

  return (
     <header id='header'>
        <div className='container head_container'>
              
              <div className='Mydetail' data-aos = 'slide-right'> 
                  <h1> Muhammad Ali</h1>
                   <h4> Front-end Developer</h4>
                 <p> Hi, I am Ali. A passionate Front-end React Developer based in Oslo, Norway.
                           </p>
                  <div className='head_button'>
                     <a href='#contact' className='btn black'> Let's talk</a>
                     <a href='#portfolio' className='btn light'> My work</a>
                  </div>
              </div>
              <div className='myphoto' data-aos = 'zoom-in'>
                  <img src= {Profile} alt="headerphoto"/>
              </div>

                <div className='head_social' data-aos = 'flip-right'>
            
                  {data.map( items =>  <a  key={items.id } href={items.link} target = '_blank' rel='noopener noreferrer'> {items.icon}</a>)}
                  </div>
        </div>
     </header>
  )
}

export default Header