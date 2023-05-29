import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills">
      <h2> Technical skills</h2>
      <div className="container skills_container">
        <div className="frontend">
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

        <div className="frontend">
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
