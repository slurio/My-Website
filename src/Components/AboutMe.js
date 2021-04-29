import React from 'react';
import styled from 'styled-components';
import bioImage from '../assets/bioimage.jpg';
import Resume from '../assets/resume.pdf';

function AboutMe() {
    return(
        <AboutContainer>
            <Image src={bioImage} alt='image of Samantha Lurio'/>
            <BlurbContainer>
                <Title>About</Title>
                <Blurb>Hi, I'm Samantha, a software engineer and fashion designer based in Brooklyn.
                I have over 7 years of design and production experience in the luxury and bridal industry. 
                Problem solving and creative thinking is what I enjoy most about my work. 
                I am always looking to merge my love of design and programming in anything I do! 
                To learn more about my experience and work history, <Link href={Resume} target='_blank'>click here.</Link>
                <br/><br/>Let's chat and work together!
                </Blurb>
            </BlurbContainer>
        </AboutContainer>
    )
}

export default AboutMe;

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const Image = styled.img`
    width: 50%;
    height: auto;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`

  const Title = styled.h3`
    margin: 0;
    font-family: Playfair Display;
    font-weight: 700;
    font-style: normal;
    line-height: .4em;
    font-size: 1.6em;
    padding-top: 10px;
  `
const BlurbContainer = styled.div`
    margin-left: 35px;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 25px;
    }
`

const Blurb = styled.p`
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
    font-size: 13px;
    color: #575757;
`

const Link = styled.a`
    text-decoration: underline;
    color: #575757;
`