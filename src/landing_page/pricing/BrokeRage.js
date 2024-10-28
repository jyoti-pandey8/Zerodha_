import React from 'react';
function BrokeRage() {
    return (
        <div className='container'>

            <div className='row text-center border-top '>



                <div className=' col-xs-12 col-md-12 col-lg-6 col-xl-6 mt-5'>

                    <a href="" style={{textDecoration:"none"}}><h1 className='fs-4 text-primary'>brokerage calculator</h1></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5"}} className='mt-5'>
                       <li>₹25 or 0.03% of the transfer value (whichever is higher).</li>
                       <li>₹25 or 0.03% of the transfer value (whichever is higher).</li>
                       <li>₹9 + GST (Not levied on transfers done via UPI)</li>
                       <li>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</li>  
                       <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
    
                    </ul>

                </div>

                <div className='col-xs-12 col-md-12 col-lg-6 col-xl-6   mt-5'>
                    <a href=""  style={{textDecoration:"none"}}><h1 className='fs-4 text-primary '>List of charges</h1></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5"}} className='mt-5'>
                       <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                       <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                       <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                       <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>  
                       <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
    
                    </ul>

                </div>




            </div>

        </div>
    );
}

export default BrokeRage;