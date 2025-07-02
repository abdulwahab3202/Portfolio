import React from 'react';
import './Navbar.css';
import { FaHome, FaRegUserCircle, FaCode, FaRegEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <a href="#hero" className="nav-item"><FaHome className="nav-icon" /></a>
                <a href="#about-us" className="nav-item"><FaRegUserCircle className="nav-icon" /></a>
                <a href="#project" className="nav-item"><FaCode className="nav-icon" /></a>
                <a href="#contact" className="nav-item"><FaRegEnvelope className="nav-icon" /></a>
                <a href="https://www.linkedin.com/in/abdul-wahab-a926a6293" target='bland' className="nav-item"><FaLinkedinIn className="nav-icon" /></a>
                <a href="https://github.com/abdulwahab3202" target='_blank' className="nav-item"><FaGithub className="nav-icon" /></a>
            </div>
        </div>
    );
};

export default Navbar;