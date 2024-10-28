import React from 'react';
function Education() {
    return ( 
        <div className='container p-4 mt-5 Education' >
        <div className='row p-4'>
        <div className=' col-xs-12 col-md-12 col-lg-6 col-xl-6 mt-5'>
        <img src='media/images/education.svg' alt='Hero Image' className='img-fluid Education-img' style={{width:"80%"}}/>

                    </div>
            <div className='col-xs-12 col-md-12 col-lg-6 col-xl-6 mt-5 mt-5'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right-long"></i></a>
                <br></br>
                <br></br>
               
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                
            </div>
           
              
            </div>
        </div>

     );
}
// navbar footer open account se krn ahi

export default Education;