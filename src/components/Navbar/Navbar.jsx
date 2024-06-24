import React, { useState } from 'react';
import './Navbar.css';
import IMAGES from '../../assets/Assets';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const [dropdownsVisible, setDropdownsVisible] = useState({
        projects: false,
        events: false,
        team: false
    });
    const [menuVisible, setMenuVisible] = useState(false);

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleDropdown = (dropdown) => {
        setDropdownsVisible(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='navbar'>
            <img src={theme === 'light' ? IMAGES.Home_w : IMAGES.Home_b} alt="" className='logo' />
            <div className={`menu ${menuVisible ? 'visible' : ''}`}>
                <ul>
                    <li className="dropdown" onMouseEnter={() => handleDropdown('projects')} onMouseLeave={() => handleDropdown('projects')}>
                        <span>Projects <span className="arrow">▼</span></span>
                        {dropdownsVisible.projects && (
                            <ul className="dropdown-menu">
                                <li><Link to="/">All Projects</Link></li>
                                <li><Link to="/">Featured Projects</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/">Blogs</Link></li>
                    <li className="dropdown" onMouseEnter={() => handleDropdown('events')} onMouseLeave={() => handleDropdown('events')}>
                        <span>Events <span className="arrow">▼</span></span>
                        {dropdownsVisible.events && (
                            <ul className="dropdown-menu">
                                <li><Link to="/">Avishkar</Link></li>
                                <li><Link to="/">Prosang</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/">Jigyasa</Link></li>
                    <li><Link to="/">Achievements</Link></li>
                    <li><Link to="/">Spinoff</Link></li>
                    <li className="dropdown" onMouseEnter={() => handleDropdown('team')} onMouseLeave={() => handleDropdown('team')}>
                        <span>Team <span className="arrow">▼</span></span>
                        {dropdownsVisible.team && (
                            <ul className="dropdown-menu">
                                <li><Link to="/">Faculty</Link></li>
                                <li><Link to="/">Coordinators</Link></li>
                                <li><Link to="/">Alumni</Link></li>
                                <li><Link to="/">Other Teams</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/">Sponsors</Link></li>
                    <li><Link to="/">More</Link></li>
                    <li className='col'><Link to="/">Collaborate</Link></li>
                </ul>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? IMAGES.searchw : IMAGES.searchb} alt="" />
            </div>
            <img onClick={toggle_mode} src={theme === 'light' ? IMAGES.day : IMAGES.night} alt="" className='toggle-icon' />
            <button className={`menu-toggle ${menuVisible ? 'active' : ''}`} onClick={handleMenuToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </div>
    );
};

export default Navbar;
