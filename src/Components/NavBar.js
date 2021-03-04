import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Resume from '../assets/resume.pdf';

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
                <ResumeLink href={Resume} target = "blank">Resume</ResumeLink>          
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
    color: black;
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
    color: black;
`

const ResumeLink = styled.a`
    margin-left: 20px;
    text-decoration: none;
    font-size: 10pt;
    color: black;
`
