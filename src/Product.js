import React from 'react'
import "./Product.css"

function Product({Heading,Heading1,subHeading1,image1,subHeading2,image2,subHeading3,image3,subHeading4,image4,image}) {
  return (
    <div className='Product'>
        <h2>{Heading}</h2>
        <div className='Product_grid'>
            <div className="subProduct">
                <img src={image1} alt=''/>
                <p>{subHeading1}</p>
            </div>
            <div className="subProduct">
                <img src={image2} alt=''/>
                <p>{subHeading2}</p>
            </div>
            <div className="subProduct">
                <img src={image3} alt="" />
                <p>{subHeading3}</p>
            </div>
            <div className="subProduct">
            <img src={image4} alt="" /> 
            <p>{subHeading4}</p>
            </div>
            
        </div>
            <div className="singleProduct">
                <h2>{Heading1}</h2>
                <img src={image} alt=''/>
                
            </div>
    </div>
  )
}

export default Product
