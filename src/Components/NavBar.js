import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <ul>
                <NavLink to='/work'>Work</NavLink>
                <li>About Me</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default NavBar;
