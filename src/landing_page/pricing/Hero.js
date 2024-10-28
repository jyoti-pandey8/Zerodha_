import React from 'react';
function Hero() {
    return (
        <div className='container'>

            <div className='row text-center'>

                <div className='col-12 mt-5 p-5 fs-5 '>
                    <h1 className='mt-5'>Charges</h1>
                    <p className='fs-5'>List of all charges and taxes</p>
                </div>

                <div className=' col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                    <img src="media/images/pricingEquity.svg" className='img-fluid pricing' />
                    <h1 className='fs-2 '>Free equity delivery</h1>
                    <p className='text-muted fs-5 mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className=' col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                    <img src="media/images/intradayTrades.svg" className='img-fluid pricing' />
                    <h1  className='fs-2 '>Intraday and F&O trades</h1>
                    <p className='text-muted fs-5 mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>


                <div className=' col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3'>

                    <img src="media/images/pricingEquity.svg" className='img-fluid pricing' />
                    <h1  className='fs-2 '>Free direct MF</h1>
                    <p className='text-muted fs-5 mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>


            </div>

        </div>
    );
}

export default Hero;