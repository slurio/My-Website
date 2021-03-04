import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Resume from '../assets/resume.pdf';
import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import MediumIcon from '../assets/medium.svg';
import FashionPortfolio from '../assets/test.svg';

function NavBar() {
    return(
        <NavBarContainer>
            <LogoContainer>
                <LogoLink to='/'>Samantha Lurio</LogoLink>
                <SocialLinkContainer>
                    <a href='https://www.linkedin.com/in/samantha-lurio-27b0832a/' target='blank'>
                        <Icon src={LinkedinIcon} alt='linkedin icon'/>
                    </a>
                    <a href='https://samantha-lurio.medium.com/' target='blank'>
                        <Icon src={MediumIcon} alt='medium icon'/>
                    </a>
                    <a href='https://github.com/slurio' target='blank'>
                        <Icon src={GithubIcon} alt='github icon'/>
                    </a>
                    <a href='https://samanthalurio.carbonmade.com/' target='blank'>
                        <FashionIcon src={FashionPortfolio} alt='fashion icon'/>
                    </a>
                </SocialLinkContainer>
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

const SocialLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
`

const Icon = styled.img`
    width: 18px;
`

const FashionIcon = styled.img`
    width: 25px;
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
