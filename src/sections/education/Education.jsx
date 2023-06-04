import React from "react";
import "./education.css";
import { edu, exp } from "./edu";
import Cards from "../../components/Cards";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Education() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="education">
      <h2 data-aos = 'fade-down'>Qualification</h2>

      <div className="qualification">
        <div className="container experience_container"  data-aos = 'slide-right'>
          <h3 data-aos = 'slide-right'>Experience</h3>
          {exp.map((item, index) => (
            <Cards key={index} className="education">
            <div className="exp_icon">
                <img src={item.icon} alt="Experience Icon"></img>
              </div>
              <div className="university">
                <h4>{item.company}</h4>
                <p>{item.role}</p>
                <p> Skills : {item.skills}</p>
                <small>{item.date}</small>
              </div>
            </Cards>
          ))}
        </div>
        <div className="line"></div> {/* Add the line here */}

        <div className="container education_container"  data-aos = 'slide-left'>
          <h3>Education</h3>
          {edu.map((item, index) => (
            <Cards key={index} className="education">
              <div className="edu_icon">{item.icon}</div>
              <div className="university">
                <h4>{item.university}</h4>
                <p>{item.degree}</p>
                <small>{item.date}</small>
              </div>
            </Cards>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
