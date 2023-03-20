import React from 'react';
import  './footer.css';
import { socials} from './data'
function Footer() {
  return (
   
     <footer>
      <div className="container footer_container">
        <div className='socials'>
            {
              socials.map(social => <a key={social.id} href={social.link} target= 'blank' rel='noopener noreferrer'>{social.icon}</a>)
            }
        </div>
        copyrights
      </div>

     </footer>
  
  )
}

export default Footer