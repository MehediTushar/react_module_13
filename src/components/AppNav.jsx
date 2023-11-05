import React from 'react';
import {NavLink} from "react-router-dom";
import '../assets/css/styles.css';


const AppNav = () => {
    return (
        <div>
            <ul ul className="nav-link">
                <li>
                    <NavLink to="/" >Home</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/contact" >Contact</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/service" >Service</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/project" >Project</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/blog" >Blog</NavLink>
                    
                </li>
            </ul>
            
        </div>
    );
};

export default AppNav;