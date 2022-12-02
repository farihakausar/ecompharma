import React from 'react'
import move1 from "../images/move1.webp"
import move2 from "../images/move2.webp"
import move3 from "../images/move3.webp"
import move4 from "../images/move4.webp"
import move5 from "../images/move5.webp"
import move6 from "../images/move6.webp"
import move7 from "../images/move7.webp"

import move8 from "../images/move8.webp"


function Well() {
  return (
    <>
      <div className="text-center it">
      <h5 className='text-center it' >WELLNESS BLOG</h5> </div>
     
      <div>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

<div className="carousel-inner its">
 <div className="carousel-item active" data-bs-interval="10000">
   <img src={move1} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the first slide.</p>
   </div>
 </div>
 <div className="carousel-item active" data-bs-interval="10000">
   <img src={move4} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the first slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={move5} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={move6} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={move7} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={move8} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 
 <div className="carousel-item" data-bs-interval="1500">
   <img src={move2} className=" w-40" alt="..." />
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 

 
 <div className="carousel-item">
   <img src={move3} className="w-40" alt="..."/><br />
   <main className="carousel-caption d-md-block">
     <h5>Third slide label</h5>
     <p>Some representative placeholder content for the third slide.</p>
   </main>
 </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>
</div> 
      
    </>
  )
}

export default Well


