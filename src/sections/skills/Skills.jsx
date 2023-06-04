import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="skills">
      <h2 data-aos = 'fade-down'> Technical skills</h2>
      <div className="container skills_container">
        <div className="frontend" data-aos = 'slide-right'>
          <RiReactjsLine className="icon_main" />
          <h4> Frontend Development</h4>
          <div className="skills_details">
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>HTML 5</h5>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>CSS3</h5>
                <small className="level">Intermediate</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>JavaScript (ES6)</h5>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>React</h5>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>TypeScript</h5>
                <small className="level">Basic</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>Material UI</h5>
                <small className="level">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="frontend" data-aos = 'slide-left'>
          <FaNode className="icon_main" />
          <h4> Backend Development</h4>
          <div className="skills_details">
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>Node Js</h5>
                <small className="level">Basic</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>MySQL</h5>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>MongoDB</h5>
                <small className="level">Basic</small>
              </div>
            </article>
            <article className="skills_content">
              <BsPatchCheckFill className="icon" />
              <div>
                <h5>Python</h5>
                <small className="level">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
