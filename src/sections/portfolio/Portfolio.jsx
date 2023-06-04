import React,{useState} from 'react'
import './portfolio.css';
import Categories from './Categories';
import Projects from './Projects';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  

const [project, setProject] = useState(data);

const categories = data.map(cat=>cat.category);

const categoryUnique =[ 'all', ...new Set(categories)];

const filterProjects = projectCat => {
  if(projectCat === 'all'){
    setProject(data);
    return;
  }
const filterCatAll = data.filter((catAll) => catAll.category === projectCat);
setProject(filterCatAll);
}
  return (
   
    <section id='portfolio'>
     <h2 data-aos="zoom-in">Portfolio</h2>
     <p data-aos="slide-left"> Check out some of the projects I recently worked on.</p>
      <div className='container portfolio_container'>
      <Categories all_categories = {categoryUnique } filterProject ={filterProjects}/>
      <div className='project_Card' data-aos="flip-down">
      {project.map((items,index)=>(
         <Projects key={index} id={index}  project_main = {items} />  )) }</div>
  
      </div>
    </section>
    
  )
}

export default Portfolio