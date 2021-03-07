import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Resume from '../assets/resume.pdf';
import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import MediumIcon from '../assets/medium.svg';
import FashionPortfolio from '../assets/hanger.svg';

function NavBar() {
    return(
        <NavBarContainer>
            <div>
                <LogoLink to='/'>Samantha Lurio</LogoLink>
                <SocialLinkContainer>
                    <IconLinks href='https://www.linkedin.com/in/samantha-lurio-27b0832a/' target='_blank'>
                        <Icon src={LinkedinIcon} alt='linkedin icon'/>
                    </IconLinks>
                    <a href='https://github.com/slurio' target='_blank'>
                        <Icon src={GithubIcon} alt='github icon'/>
                    </a>
                    <a href='https://samantha-lurio.medium.com/' target='_blank'>
                        <Icon src={MediumIcon} alt='medium icon'/>
                    </a>
                    <a href='https://samanthalurio.carbonmade.com/' target='_blank'>
                        <FashionIcon src={FashionPortfolio} alt='fashion icon'/>
                    </a>
                </SocialLinkContainer>
            </div>
            <LinkContainer>
                <Link to='/work'>Work</Link>
                <Link to='/aboutme'>About Me</Link>
                <Link to='/contact'>Contact</Link>
                <ResumeLink href={Resume} target = "_blank">Resume</ResumeLink>          
            </LinkContainer>
        </NavBarContainer>
    )
}

export default NavBar;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 30px 0px;
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
`

// const LogoContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

const LogoLink = styled(NavLink)`
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    margin: 0;
`

const IconLinks = styled.a`
`

const SocialLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
