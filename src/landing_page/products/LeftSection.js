import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
    <div className='container  mb-5'>
        <div className='row'>
            <div className='col-12 col-xs-12 col-md-12 col-lg-8 col-xl-8 p-5 LeftImg'>
                {/* <img src={imageURL } /> */}
                <img src={imageURL} alt={productName} className="img-fluid" />
            </div>

            <div className='col-12 col-xs-12 col-md-12 col-lg-4 col-xl-4 p-5 mt-5 fs-6'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>

                <div>
                <a href={tryDemo}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                </div>
               
               <div className='mt-3'>

               <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg" className='img-fluid'/>
                </a>

                <a href ={appStore}>
                    <img src="media\images\appstoreBadge.svg"  className='img-fluid'/>
                </a>

               </div>
                


            </div>
        </div>

    </div>
    );
}

export default LeftSection;