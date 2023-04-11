import React from 'react'
import "./Lowerheader.css";
import MenuIcon from '@mui/icons-material/Menu';

function Lowerheader() {
  return (
    <div className='Lowerheader'>
      <ul className='lowerheader_list'>
        <li><MenuIcon/></li>
        <li>All</li>
        <li>Today's Deal</li>
        <li>Registry</li>
        <li>Coustomer service</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default Lowerheader