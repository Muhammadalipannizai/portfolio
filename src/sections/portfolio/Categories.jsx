import React,{useState} from 'react'
import ButtonCategory from './Button_Category';

function Categories(props) {
const [activeButton, setActive]= useState('all');

const clickButton = (activeCat) =>{
    setActive(activeCat);
    props.filterProject(activeCat);
}
  return (
    <div className='portfolio_categories'>
      {
        props.all_categories.map((category,index) => (
          <ButtonCategory
            key={index}
            category = {category}
            className ={`btn cat_btn ${activeButton === category ? 'primary' : 'white'}`}
            clickHandle = {()=> clickButton(category)}
          />
        ))
      }
    </div>
  )
}

export default Categories