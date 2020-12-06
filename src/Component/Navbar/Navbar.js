import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../../image/Logo.png";
import "./Navbar.css";

const Navbar = () => {
    
     return (
        <div className="navbar">
            <img className="nav-logo" src={logo} alt=""/>
            <input className="nav-search" type="text" name="search" id="search" placeholder="Search Travel Spot"/>
            <ul className="nav-collection">
                <li className="nav-item">News</li>
                <li className="nav-item">Destination</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">
                <Button className="nav-btn" variant="contained" color="secondary">Login</Button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;