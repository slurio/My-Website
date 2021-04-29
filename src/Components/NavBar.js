import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import Resume from '../assets/resume.pdf';
import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import MediumIcon from '../assets/medium.svg';
import FashionPortfolio from '../assets/hanger.svg';
import NavIcon from '../assets/icon.svg';
import { useState } from 'react';

function NavBar() {
    let location = useLocation();
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // let [mobileClick, setMobileClick] = useState(false);
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    const openNavBar = () => {
        // setMobileClick(true);
        const links = document.querySelector('.links')
        const icon = document.querySelector('.navIcon')

        if (screenWidth <= 590) {
            links.style.height ='200px';
            // links.style.display = 'flex';
            // links.style.flexDirection = 'column';
            icon.style.height = '0px';
        }
    }
    
    const closeNavBar = () => {
        const links = document.querySelector('.links');
        const icon = document.querySelector('.navIcon')

        if (screenWidth <= 590) {
            links.style.height ='0px';
            icon.style.height = '30px';
        }
    }

    return(
        <NavBarContainer screenWidth={screenWidth}>
            <NavigationIcon className={'navIcon'} screenWidth={screenWidth} onClick={openNavBar} src={NavIcon} alt='navgation icon to open nav bar'/>
            <SocialContainer screenWidth={screenWidth}>
                <LogoLink to='/'>Samantha Lurio</LogoLink>
                <SocialLinkContainer>
                    <IconLinks href='https://www.linkedin.com/in/samantha-lurio-27b0832a/' target='_blank'>
                        <Icon src={LinkedinIcon} alt='linkedin icon'/>
                    </IconLinks>
                    <a href='https://github.com/slurio' target='_blank' rel="noreferrer">
                        <Icon src={GithubIcon} alt='github icon'/>
                    </a>
                    <a href='https://samantha-lurio.medium.com/' target='_blank' rel="noreferrer">
                        <Icon src={MediumIcon} alt='medium icon'/>
                    </a>
                    <a href='https://samanthalurio.carbonmade.com/' target='_blank' rel="noreferrer">
                        <FashionIcon src={FashionPortfolio} alt='fashion icon'/>
                    </a>
                </SocialLinkContainer>
            </SocialContainer>
            <LinkContainer screenWidth={screenWidth} className={'links'}>
                <WorkLink className={'link'} onClick={closeNavBar} currentpath={location.pathname} to='/'>Work</WorkLink>
                <Link className={'link'} onClick={closeNavBar} currentpath={location.pathname} path={'/aboutme'} to='/aboutme'>About Me</Link>
                <Link className={'link'} onClick={closeNavBar} currentpath={location.pathname} path={'/contact'} to='/contact'>Contact</Link>
                <ResumeLink className={'link'} href={Resume} target = "_blank">Resume</ResumeLink>          
            </LinkContainer>
        </NavBarContainer>    
    )
}

export default NavBar;

const NavigationIcon = styled.img`
    display: ${props => props.screenWidth <= 590 ? null: `none`};
`   

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
    @media (max-width: 590px) {
        margin-bottom: 0;
        & > .links{
            transition: .5s;
            height: 0px;
            overflow: hidden;
            text-align: center;
            width: 100vw;
          }
    }
`


const SocialContainer = styled.div`
    display: ${props => props.screenWidth <= 590 ? `none`: null};
`

const LogoLink = styled(NavLink)`
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    margin: 0;
    font-family: Assistant;
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
    @media (max-width: 590px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        & > .link{
            margin-left: 0;
            font-size: 16px;
        }
    }
`

const Link = styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    font-size: 10pt;
    color: ${props => props.path === props.currentpath ? `grey`: `black`};
    font-family: Assistant;
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    &:hover {
        top: -10px;
    }
`

const WorkLink = styled(Link)`
    color: ${props => props.currentpath.includes('work') || props.currentpath === '/' ? `grey`: `black`};
`

const ResumeLink = styled.a`
    margin-left: 20px;
    text-decoration: none;
    font-size: 10pt;
    color: black;
    font-family: Assistant;
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    &:hover {
        top: -10px;
    }
`
