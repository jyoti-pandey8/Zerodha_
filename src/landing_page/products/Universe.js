import React from 'react';
function Universe() {
    return (
        <div className='container '>
            <div className='row text-center'>

                <div className='col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12  mt-5 p-5 fs-5 '>
                    <h1 className='mt-5'>The Zerodha Universe</h1>
                    <p className='fs-6'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                    <img src="media/images/smallcaseLogo.png"  className='img-fluid universeImg ' />
                    <p className='text-small text-muted m-3'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-  p-3'>
                    <img src="media/images/zerodhaFundhouse.png" className='img-fluid universeImg' />
                    <p className='text-small text-muted m-3'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.

                    </p>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                    <img src="media/images/sensibullLogo.svg"  className='img-fluid universeImg' />
                    <p className='text-small text-muted m-3'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>



                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png"  className='img-fluid universeImg' />
                    <p className='text-small text-muted m-3'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>
                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png"  className='img-fluid universeImg' />
                    <p className='text-small text-muted m-3'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.                    </p>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png"  className='img-fluid universeImg' />
                    <p className='text-small text-muted m-3'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>


                <button className=' p-2 btn btn-primary fs-5 mb-5' style={{width:"auto", margin: "0 auto"}}>Sign up Now</button>



            </div>
        </div>
    );
}

export default Universe;