import React from 'react';
function RightSection({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className='container '>
        <div className='row'>

            <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6  mt-5 p-5 fs-5 Rightcontent'>
                <h1 className='mt-5'>{productName}</h1>
                <p className='fs-6'>{productDescription}</p>

                <a href={learnMore} style={{}}>Learn More</a>
                </div>
            
                 <div className='col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6  mb-5 '>
                {/* <img src={imageURL } /> */}
                <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
         

     </div>
    </div>
     );
}

export default RightSection;