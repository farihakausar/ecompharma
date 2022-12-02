import React from 'react'
import kid from "../images/kid.webp"
import men from "../images/men.webp"
import its from "../images/its.webp"

function Icons() {
  return (
    <div className='its2'>
    <div  >
  <img src={kid}alt="" width="50px"/>
  <p className='hi'>kid's health </p>
</div>   <div >
  <img src={men}alt="" width="50px"/>
  <p className='hi'>men's health </p>
</div>   <div >
  <img src={its}alt="" width="50px"/>
  <p className='hi'>women health </p>
</div>   <div >
  <img src={kid}alt="" width="50px"/>
  <p className='hi'>kid's health </p>
</div>   <div >
  <img src={kid}alt="" width="50px"/>
  <p className='hi'>kid's health </p>
</div>   <div >
  <img src={kid}alt=""width="50px" />
  <p className='hi'>kid's health </p>
</div> 
 
    </div>
    
  )
}

export default Icons
