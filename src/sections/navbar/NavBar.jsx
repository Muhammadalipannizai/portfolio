import React from 'react';
import Logo from '../../assets/logo.jpg';
import './navbar.css';
import data from './data';
import ColorLensIcon from '@mui/icons-material/ColorLens';
function NavBar() {

  return (
   <nav>
    <div className='container nav_container'>
      <a href='index.html' className='nav_logo'>
        <img src= {Logo} alt=''></img>
      </a>
      <ul className='nav_menu'>
     {data.map( (item ) => <li key={item.id}> <a href= {item.link}> {item.title}</a></li>)}
      </ul>
      <button id='nav_icon'> <ColorLensIcon/> </button>
    </div>
   </nav>
     
   
  )
}

export default NavBar