import React from 'react'



import background from "../images/map.webp";

function Quality() {
  return (
    <>
   
            
             
            
    
    <h4 className='text-center'>OUR QUALITY PROMISE</h4>

<p className='hi1'>Nutrifactor’s customer trust is built on our efforts to create and formulate high quality products and to manufacture with same consistent quality standards. Our People in quality assurance, manufacturing, packaging, distribution and facility management are all required to meet standards for Current Good Manufacturing Practices (GMP).</p>
<div style={{backgroundImage: `url(${background})`,
              height:'100vh',
              marginTop:'-70px',
              fontSize:'50px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',}}> 
              <div className='p3'>
              <h1>
              GLOBAL PRESENCE</h1><br />
              <h6><b>BETTER CHOICE, BETTER HEALTH, BETTER LIVES</b></h6>
              <button type="button" className='btn btn-dark p6'>LEARN MORE</button></div>
              </div>
{/* <img src={Map} alt=""  height="530px"/> */}
    </>
  )
}

export default Quality