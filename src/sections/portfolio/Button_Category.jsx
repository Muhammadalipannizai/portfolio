import React from 'react'

function ButtonCategory(props) {
  return (
   <button className={props.className} onClick={()=> props.clickHandle(props.category)}>  {props.category}</button>
  )
}

export default ButtonCategory