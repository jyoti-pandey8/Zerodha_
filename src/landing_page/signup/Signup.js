import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Signup() {
    return (
        <div className='container '>


            <div className='row p-5 mt-5 text-muted '>

                <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6 text-center  p-5'>
                    <img src="media/images/signup.png" style={{ width: "100%" }} className='img-fluid'/>

                </div>

                <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6  mt-5 text-center '>
                    <h1 className='fs-2 mb-5'>Signup now</h1>

                    <p className='fs-5 mb-4 text-muted'>
                        Or track your existing application.</p>

                    <TextField
                        required
                        id="outlined-required"
                        label="Mobile number"
                        defaultValue="+91"
                    />

                    <p className='fs-6 text-muted mt-3 ' style={{ fontSize: "10px" }}>You will receive an OTP on your number</p>
                    <Button variant="contained">Continue</Button>


                    <p ><a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Want to open an NRI account?.</a>
                    </p>
                </div>

                <div className='col-12 text-center text-muted mt-5' style={{ fontSize: "13px" }}>
                    <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br></br> Please visit  <a href="">this article</a>to know more.</p>
                </div>
                <div className='col-12 text-center text-muted ' style={{ fontSize: "13px" }}>
                    <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="">offline forms.</a> For help, <a href="">click here.</a></p>
                </div>

            </div>
        </div>
    );
}

export default Signup;
