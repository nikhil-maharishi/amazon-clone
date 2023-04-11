import React from 'react'
import "./Header.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



function Header() {


  return (
    <nav className='header'>
      <Link to="/">

        <img className='header_logo ' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />


      </Link>
      <div className="header_location">
        <LocationOnOutlinedIcon className='location_icon' />
      </div>
      <div className="header_location">
        <span className="header_optionLineOne">Hello</span><br></br>
        <span className="header_optionLineTwo">Select Your Location</span>
      </div>
      <div className="header_search">
        <select className='header_category'>
          <option>All</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Amazon Pharmacy</option>
          <option>Appliances</option>
          <option>Apps & Games</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car & MotorbikeCar & Motorbike</option>
          <option>Clothing & Accessories</option>
          <option>Collectibles</option>
          <option>Deals</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Garden & Outdoors</option>
          <option>Gift Cards</option>
          <option>Prime Video</option>
          <option>Video Games</option>

        </select>
        <input type="text" className="header_searchInput" />
        <div className="header_searchIcon">
          <SearchIcon />
        </div>
        <select className='language'>
          <option>English</option>
          <option>Hindi</option>
          <option>Tamil</option>
          <option>Bangla</option>
        </select>
      </div>
      <div className="header_nav">
        <Link to='/login' className='header_link'>
          <div className="header_option">
            <span className="header_optionLineOne">Hello,Sign in</span><br></br>
            <span className="header_optionLineTwo">Account & Lists</span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className="header_option">
            <span className="header_optionLineOne">Return</span><br></br>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span><br></br>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to='/checkout'>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount" >0</span>
          </div>
        </Link>
      </div>
    </nav>
  );

}

export default Header;
