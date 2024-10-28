import React from 'react';
import './SupportPage.css';
function Hero() {
   
    return ( 
       <>
       
       <section className='container-fluid' id="supportHero">
        <div className=' ' id="supportWrapper">
            <h4 className='col-12 col-xs-12 col-md-12 mt-5 '>
         Support Portal
            </h4>
            <a href='' className='mt-5 col-12 col-xs-12 col-md-12 '>Track Tickets</a>
        </div> 
        <div className='row '>
        <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6  p-4'>
            <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='
Eg: how do i activate F&O, why is my order getting rejected ...' className='mb-5' /><br></br>

      <a href="" className='fs-6 m-3'>Track account opening </a>
      <a href="" className='fs-6 m-3'>Track segment activation </a>
      <a href="" className='fs-6 m-3'>Intraday margins </a>
      <a href="" className='fs-6 '>Kite user manual</a>
        </div>
        <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6  p-5'>
            <h1 className='fs-3'>Featured</h1>
            <ol>
           <li> <a href="" className='fs-5'>BSE StAR mutual fund platform downtime </a></li>
           <li> <a href="" className='fs-5'>Rights Entitlements listing in October 2024</a></li>
           </ol>
        </div>
     </div> 
         
    </section>

       </>
     );
}

export default Hero;