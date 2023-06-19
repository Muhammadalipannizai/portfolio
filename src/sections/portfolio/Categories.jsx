import React,{useState} from 'react'
import ButtonCategory from './Button_Category';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Categories(props) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

const [activeButton, setActive]= useState('all');

const clickButton = (activeCat) =>{
    setActive(activeCat);
    props.filterProject(activeCat);
}
  return (
    <div className='portfolio_categories' >
      {
        props.all_categories.map((category,index) => (
          <ButtonCategory
            key={index}
            category = {category}
            className ={`btn cat_btn ${activeButton === category ? 'black' : 'white'}`}
            clickHandle = {()=> clickButton(category)}
          />
        ))
      }
    </div>
  )
}

export default Categories