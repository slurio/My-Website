import React from 'react';
import styled from 'styled-components';
import bioImage from '../assets/bioimage.jpg';
import Resume from '../assets/resume.pdf';

function AboutMe() {
    return(
        <AboutContainer>
            <Image src={bioImage}/>
            <BlurbContainer>
                <Title>About</Title>
                <Blurb>Hi, I'm Samantha, a software engineer and fashion designer based in Brooklyn.
                I have over 7 years of design and production experience in the luxury and bridal industry. 
                Problem solving and creative thinking is what I enjoy most about my work. 
                I am always looking to merge my love of design and programming in anything I do! 
                To learn more about my experience and work history, <a href={Resume} target='blank'>click here.</a>
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
`

const Image = styled.img`
    width: 50%;
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
`

const Blurb = styled.p`
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
    font-size: 13px;
    color: #575757;
`