import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Hero Image' className='img-fluid mb-5'/>
            <h1 className='mt-5 fs-1'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className=' p-2 btn btn-primary fs-5 mb-5' style={{width:"auto", margin: "0 auto"}}>Sign up</button>
        </div>

       </div>
     );
}

export default Hero;