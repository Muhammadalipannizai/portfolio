import React from 'react';
import  './footer.css';
import {links, socials} from './data'
function Footer() {
  return (
   
     <footer>
      <div className="container footer_container">
  
        <ul className='nav_menu'>
          {
            links.map(nav => <li key={nav.id}> <a href= {nav.link}> {nav.title}</a></li>)
          }

        </ul>
        <div className='socials'>
            {
              socials.map(social => <a key={social.id} href={social.link} target= 'blank' rel='noopener noreferrer'>{social.icon}</a>)
            }
        </div>
      </div>

     </footer>
  
  )
}

export default Footer