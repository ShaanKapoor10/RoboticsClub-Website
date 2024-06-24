
import React from 'react';
import './Navbar.css';
import IMAGES from '../../assets/Assets';
import { useState } from "react";
import {useNavigate,Link} from 'react-router-dom';

const Navbar = ({theme,setTheme}) => {
    const toggle_mode=()=>{
        theme == 'light'?setTheme('dark'): setTheme('light');
    }
// const navigate = useNavigate();
  return (
    <div className='navbar'>
        
       <img src={theme == 'light'? IMAGES.Home_w: IMAGES.Home_b} alt="" className= 'logo'/> 
       <ul>
        <li> <Link to="/">Projects</Link> </li>
        <li><Link to="/">Blogs</Link></li>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/">Jigyasa</Link></li>
        <li><Link to="/">Achievements</Link></li>
        <li><Link to="/">Spinoff</Link></li>
        <li><Link to="/">Sponsors</Link> </li>
        <li><Link to="/">More</Link>  </li>
        <li><Link to="/">Collaborate</Link></li>
       </ul>
       <div className='search-box'> 
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light'?IMAGES.searchw:IMAGES.searchb} alt=""/>
       </div>

       <img onClick ={() => {toggle_mode()}}src={theme == 'light'?IMAGES.day:IMAGES.night} alt="" className='toggle-icon'/>

    </div>
  )
}

export default Navbar