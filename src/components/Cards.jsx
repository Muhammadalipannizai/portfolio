import React from 'react'
import './cards.css'
function Cards(props) {
  return (
    <article className = {`card ${props.className}`} onClick= {props.click} >
        {props.children}
    </article>
  )
}

export default Cards