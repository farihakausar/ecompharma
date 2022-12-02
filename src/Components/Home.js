import React from 'react'


function Home() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg  ">
  {/* <div className="container-fluid its "> */}
    <div className='nav1'>
   {/* <img src={require("../images/sphd logo-1.png")}  width="150px" /> */}

   <h5  className='nav1'>NUTRIFACTOR  </h5>
   <h6  className='nav1'>FOR LIFE</h6>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    </div>
    {/* aria-label="Search" */}
    {/* className="form-control" */}
    {/* className="d-flex text-center "  */}
      <div className='mx-auto'>
      <form role="search">
        <input  type="search" placeholder="Search products & ingredients " className='serach'/>
       <i class="zmdi zmdi-search m-3"></i>
        </form>
        </div>
        
      <div className="last">
       <div className="last1">
        <div><i className="zmdi zmdi-shopping-cart mt-2"></i></div>&nbsp;&nbsp;
       <div className='lo'>
        <small>0</small><br /><small>cart</small></div>
       &nbsp;&nbsp;
     <div><i className='zmdi zmdi-account-o mt-2'></i> </div> 
     &nbsp;&nbsp;
     <div className='lo'>
      <small>Login or register</small>
      <br />
      <small>My account</small>
     
     
     
       </div>
     
       </div>
       </div>
  {/* </div> */}
</nav>
    </>
  )
}

export default Home
