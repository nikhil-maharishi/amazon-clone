import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
import Product from './Product';
import { style, width } from '@mui/system';
import { Link } from '@mui/material';

function Home() {
  return (
    <div className='home'>
         <Carousel className='imgCarousel'>
                <div>
                    <img src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" />
                    
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
                    
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
                    
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
                    
                </div>
            </Carousel>
            <div className="home_row">
                <Product
                    Heading="Gaming accessories"
                    subHeading1="Hedsets"
                    image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                    subHeading2="Computer mice"
                    image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                    subHeading3="Keybords"
                    image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                    subHeading4="chairs"
                    image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                    
                />
                <Product
                    Heading="Shop by Category"
                    subHeading1="Computer & Accessories"
                    image1="https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UL480_FMwebp_QL65_.jpg"
                    subHeading2="Video Game"
                    image2="https://m.media-amazon.com/images/I/61z3GQgEPZL._AC_UL480_QL65_.jpg"
                    subHeading3="Baby"
                    image3="https://m.media-amazon.com/images/I/41U2bOJ+lEL._AC_UL480_QL65_.jpg"
                    subHeading4="Toy & Games"
                    image4="https://m.media-amazon.com/images/I/71l0diqz49L._AC_UL480_QL65_.jpg"
                    
                />
                <Product
                    Heading="Back to School"
                    subHeading1="Notebooks"
                    image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525805_186x116_en_US._SY116_CB630079578_.jpg"
                    subHeading2="Accessories"
                    image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525808_186x116_en_US._SY116_CB630079578_.jpg"
                    subHeading3="Food storage"
                    image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525806_186x116_en_US._SY116_CB630079578_.jpg"
                    subHeading4="Penciles"
                    image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525807_186x116_en_US._SY116_CB630079578_.jpg"
                   
                />
                 
            </div>
            <div className="home_row2">
                <Product
                    Heading1="Shop activity trackers and smartwatches"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                    
                />
                <Product
                    Heading1="Health & Personal Care"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                    
                />
                <Product
                    Heading1="Shop Pet Supplies"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
                   
                />
            </div>
            
            
    </div>
  )
}

export default Home