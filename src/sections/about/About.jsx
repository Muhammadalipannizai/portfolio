import React from "react";
import Profile from "../../assets/web.jpg";
import "./about.css";
import CV from "../../assets/NewCV.pdf";
import Cards from '../../components/Cards'; 
import data from './data';
import FileDownloadIcon from "@mui/icons-material/FileDownload";


function About() {

  return (
    <section id="about">
      <div className="container about_container" >
      <div className="about_left">
          <div className="image_about" >
            <img src={Profile} alt="aboutMe"></img>
          </div>
        </div>
        <div className="about_right"  >
          <h2 > About me </h2>
          <div className='about_cards' >
            { data.map( (item, index) => (
              <Cards key ={index} className = ' card_component'>
                <span  className='icon_about'>{item.icon}</span>
                <h5>{item.title}</h5>
                {/* <small>{item.desc}</small> */}
              </Cards>
            )
            )}
          </div>
          <div className="about_cards" ></div>
          <p >
            Hi, I'm Muhammad Ali, a junior frontend React developer passionate
            about creating engaging and user-friendly web experiences. With a
            strong foundation in HTML, CSS, and JavaScript, I strive to build
            responsive and accessible websites that meet modern web standards.
            I have hands-on experience working with React, including creating
            reusable components, managing state using hooks, and utilizing
            third-party libraries and APIs.
          </p>

          <a href={CV} download className="btn black" >
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
