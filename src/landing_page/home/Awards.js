import React from 'react';
function Awards() {
    return ( 
     <div className='container mt-5'>
        <div className='row'>
            <div className=' col-xs-12 col-md-12 col-lg-6 col-xl-6'>
                <img src='media/images/largestBroker.svg' className='img-fluid  LargerBroker-img'/>
            </div>
            <div className='col-xs-12 col-md-12 col-lg-6 col-xl-6'>
                <h1>Largest stock broker in India</h1>
                <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <div className='row mt-5'>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds </p>
                    </li>
                </ul>   
                    </div>
                </div>
              
              <img src='media\images\pressLogos.png' className='img-fluid mt-5 PressLogo-img'style={{width:"80%", margin: "0 auto"}}/>
            </div>
        </div>
     </div>
     );
}

export default Awards;
