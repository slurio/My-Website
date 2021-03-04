import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <NavBarContainer>
            <LogoContainer>
                <LogoLink to='/'>Samantha Lurio</LogoLink>
                <Title>Software Engineer</Title>
            </LogoContainer>
            <LinkContainer>
                <Link to='/work'>Work</Link>
                <Link to='/work'>About Me</Link>
                <Link to='/work'>Contact</Link>
                <Link to='/work'>Resume</Link>          
            </LinkContainer>
        </NavBarContainer>
    )
}

export default NavBar;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    padding: 30px 0px;
`

const LogoContainer = styled.div``

const LogoLink = styled(NavLink)`
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
`

const Title = styled.h6`
    margin: 0px;
    text-align: center;
`

const LinkContainer = styled.div`
    text-transform: uppercase;
`

const Link = styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    font-size: 10pt;
`
