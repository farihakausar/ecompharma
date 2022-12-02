import React from 'react'
import logo from "../images/logo.webp"
function Footer() {
  return (
    <>

<div className="footer bg">
        <div className="footer-nav its21">
            <div className="logo">
                <img src={logo} alt="" width="250px" />
                {/* <p>NUTRIFACTOR
FOR LIFE</p> */}
<div className='grey'>
<small>
Pakistan's No.1 Vitamin Brand</small><br />
<small>Call: 0800-77722b</small><br />
<small>Email: info@nutrifactor.com</small><br />
</div>
                <br/>
                
                <div className="footer-navbar grey">
                <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className='fab fa-youtube'></i>
           
            <i className="fab fa-linkedin"></i>
        </div> 
            
        </div>
       
       
       
        <div>
        <p><b>NUTRIFACTOR</b></p>
        



<div className='grey'>
<small>
About Us</small><br />
<small>Careers</small><br />
<small>Contact Us</small><br />
<small>Notifications</small><br />
<small>Careers</small><br />
</div>
        

        </div>
        <div>
        
        <p><b>SHOP</b></p>
        



<div className='grey'>
<small>
All Products</small><br />
<small>BEST SELLING</small><br />
<small>new arrival</small><br />
<small>offers</small><br />
<small>track your odrer</small><br />
</div>
        

        </div>
        <div>
        

        <p><b>BUSINESS</b></p>
        



<div className='grey'>
<small>
International</small><br />
<small>Franchise</small><br />
<small>
Quality & Safety</small><br />
<small>
Become a Distributor</small><br />
<small>Store Locator</small><br />
</div>
        

        </div>
        <div>
        





        <p><b>HELP & TERMS</b></p>
        



<div className='grey'>
<small>
Shipping Policy</small><br />
<small>Cash On Delivery</small><br />
<small>Return & Refund</small><br />
<small>Terms of Service</small><br />
<small>Privacy Policy</small><br />
</div>
        

        </div>
       
    
        <div>
        <p><b>NEWSLETTER SIGN UP</b></p>
        <small className='grey'>
Receive our latest updates about our<br/>
 products and promotions.</small>
        <form>
  <div className="form-group">
   
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address"/>

  </div>

 
  <button type="submit " className="btn  space"><b>Submit</b></button>
</form>

        </div>
        <small className='copy'>&copy; 2022 All Rights Reserved <b>Nutrifactor Laboratories (Pvt) Limited</b></small>
   </div>
   </div>
   </>
 )
 }

export default Footer






