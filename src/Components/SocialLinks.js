import React from 'react';
import styled from 'styled-components';
import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import MediumIcon from '../assets/medium.svg';
import FashionPortfolio from '../assets/hanger.svg';
import { NavLink } from 'react-router-dom';

function SocialLinks() {

    return(
        <Container>
            <SocialContainer>
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
        </Container>
    )
}

export default SocialLinks;

const Container = styled.div`
@media (max-width: 590px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
}
    
`

const SocialContainer = styled.div`
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