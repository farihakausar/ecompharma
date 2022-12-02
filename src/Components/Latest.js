import React from 'react'
import med1 from "../images/med1.png"
import med2 from "../images/med2.webp"
import med3 from "../images/med3.webp"
import med4 from "../images/med4.webp"
import med5 from "../images/med5.webp"
import med6 from "../images/med6.webp"


function Latest() {
  return (
    <div>
<div className="text-center it">
      <h5 className='text-center it' >LATEST OFFERS & DISCOUNTS</h5> </div>
     
      <div></div>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

<div className="carousel-inner its">
 <div className="carousel-item active" data-bs-interval="10000">
   <img src={med1} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the first slide.</p>
   </div>
 </div>
 <div className="carousel-item active" data-bs-interval="10000">
   <img src={med2} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the first slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={med3} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={med4} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={med5} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="1500">
   <img src={med6} className=" w-40" alt="..."/>
   <div className="carousel-caption d-md-block">
     <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
     <p>Some representative placeholder content for the second slide.</p>
   </div>
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
  //   <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img src={med1 }className="d-block w-40" alt="..."/>
  //       <div className="carousel-caption d-none d-md-block">
  //    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
  //    <p>Some representative placeholder content for the second slide.</p>
  //  </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img src={med2} className="d-block w-40" alt="..."/>
  //       <div className="carousel-caption d-none d-md-block">
  //    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
  //    <p>Some representative placeholder content for the second slide.</p>
  //  </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img src={med3} className="d-block w-40" alt="..."/>
  //       <div className="carousel-caption d-none d-md-block">
  //    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
  //    <p>Some representative placeholder content for the second slide.</p>
  //  </div>
  //     </div>
  //   </div>
  //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span className="visually-hidden">Previous</span>
  //   </button>
  //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span className="visually-hidden">Next</span>
  //   </button>
  // </div></div>
  )
}

export default Latest