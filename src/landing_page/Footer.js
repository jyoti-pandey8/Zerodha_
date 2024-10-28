import React from 'react';
function Footer() {
    return (
         
        <footer  style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5 '>
                <div className='col-12 col-xs-12 col-md-12 col-lg-3 col-xl-3 p-2 '>
                    <img src="media/images/logo.svg" alt="Logo" style={{ width: "70%" }} />
                    <p className='mt-3'>&copy; 2010 - 2024, Zerodha Broking Ltd.

                        All rights reserved.</p>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-3 col-xl-3  p-2' style={{textDecoration:"none" }}>
                    <p>Company</p>
                    <a href=""  style={{textDecoration:"none" }}>About</a><br></br>
                    <a href=""  style={{textDecoration:"none" }}>Products</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Pricing</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Referral programme</a><br></br>
                    <a href="" style={{textDecoration:"none" }}> Careers</a><br></br>
                    <a href="" style={{textDecoration:"none" }}> Zerodha.tech</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Press & media</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Zerodha Cares (CSR)</a><br></br>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-3 col-xl-3  p-2'>
                    <p>Support</p>
                    <a href="" style={{textDecoration:"none" }}>Contact us</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Support portal</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Z-Connect blog</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>List of charges</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Downloads & resources</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>ideos</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Market overview</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>How to file a complaint?</a><br></br>
                    <a href="" style={{textDecoration:"none" }}>Status of your complaints</a><br></br>
                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-3 col-xl-3 p-2'>
                    <p>Account</p>
                    <a href="" style={{textDecoration:"none" }}>Open an account</a><br></br>
                    <a href="" style={{textDecoration:"none" }}> Fund transfer</a>
                </div>
            </div>
           
           <div className='mt-5 text-muted' style={{fontSize:"12px"}}>
            <p>  Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
         
            <div className='container row text-muted'  style={{fontSize:"14px"}}>
            <div className='col'>NSE</div> 
            <div className='col'>BSE</div> 
            <div className='col'>MCX </div>
            <div className='col'>Terms & conditions </div>
           <div className='col' >Policies & procedures</div>
           <div className='col'> Privacy policy</div>
            <div className='col'>Disclosure</div>
           <div className='col' >For investor's attention </div>
            <div className='col'>Investor charter</div>
            </div>
            
        </div>
        </footer>

    );
}

export default Footer;
