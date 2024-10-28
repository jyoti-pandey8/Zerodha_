import React from 'react';
function Stats() {
    return (  
       <div className='container mt-5 p-4'>
        <div className='row p-4'>
            <div className='col-xs-12 col-md-12 col-lg-6 col-xl-6 mt-5'>
                <h1 className='fs-2'>Trust with confidence</h1>
                <br></br>
                <h2  className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <br></br>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p> 
                <br></br>

                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br></br>

                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-xs-12 col-md-12 col-lg-6 col-xl-6 mt-5'>
                <img src='media\images\ecosystem.png' className='img-fluid'/>

                <div className='text-center mt-4 stats-link'>
                <a href='' className='mx-4 ' style={{textDecoration:"none" }}>Explore out products <i class="fa-solid fa-arrow-right-long"></i></a>
               
                <a href='' style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            </div>

                  
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }} className='mt-5'>
    <img 
        src='media/images/pressLogos.png' 
        className='img-fluid imgStats ' 
        alt='Press Logos' 
    />
</div>

       </div>
       
    );
}

export default Stats;
