import React from 'react';
import  './footer.css';
import { socials} from './data';
function Footer() {

  const currentYear = new Date().getFullYear();

  return (
   
     <footer>
      <div className="container footer_container">
        <div className='socials'>
            {
              socials.map(social => <a key={social.id} href={social.link} target= 'blank' rel='noopener noreferrer'>{social.icon}</a>)
            }
        </div>
        <div className='date'>  <span>&copy; {currentYear} All rights reserved.</span></div>
       
      </div>

     </footer>
  
  )
}

export default Footer