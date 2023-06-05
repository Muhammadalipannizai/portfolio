import React from "react";
import Profile from "../../assets/web.jpg";
import "./about.css";
import CV from "../../assets/NewCV.pdf";
import Cards from '../../components/Cards'; 
import data from './data';
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function About() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  
  return (
    <section id="about">
      <div className="container about_container">
      <div className="about_left" data-aos = 'slide-right'>
          <div className="image_about">
            <img src={Profile} alt="aboutMe"></img>
          </div>
        </div>
        <div className="about_right" >
          <h2 data-aos = 'fade-down'> About me </h2>
          <div className='about_cards' data-aos = 'fade-up'>
            { data.map( item => (
              <Cards key ={item.id} className = ' card_component'>
                <span  className='icon_about'>{item.icon}</span>
                <h5>{item.title}</h5>
                {/* <small>{item.desc}</small> */}
              </Cards>
            )
            )}
          </div>
          <div className="about_cards" data-aos = 'fade-right'></div>
          <p data-aos = 'slide-left'>
            Hi, I'm Muhammad Ali, a junior frontend React developer passionate
            about creating engaging and user-friendly web experiences. With a
            strong foundation in HTML, CSS, and JavaScript, I strive to build
            responsive and accessible websites that meet modern web standards.
            I have hands-on experience working with React, including creating
            reusable components, managing state using hooks, and utilizing
            third-party libraries and APIs.
          </p>

          <a href={CV} download className="btn black" data-aos = 'fade-left'>
            {" "}
            <FileDownloadIcon />
            Download CV
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default About;
