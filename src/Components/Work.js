import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ThreadLogo from '../assets/thread_logo.png';
import BreakupSpaceLogo from '../assets/breakup_space_logo.png';
import ViaggamoLogo from '../assets/viaggamo_logo.png';
import ScribbleLogo from '../assets/scribble_logo.png';


function Work() {
      
    return(
        <>
        <ProjectContainer>
            <Project>
                <WorkLink to='/work/breakupspace'>
                    <Image src={BreakupSpaceLogo} alt='Breakup Space Logo'/>
                    <Header>Breakup Space</Header>
                </WorkLink>
            </Project>
            <Project>
                <WorkLink to='/work/thethread'>
                    <Image src={ThreadLogo} alt='The Thread Logo'/>
                    <Header>The Thread</Header>
                </WorkLink>
            </Project>
            <Project>
                <WorkLink to='/work/viaggamo'>
                    <Image src={ViaggamoLogo} alt='Viaggamo Logo'/>
                    <Header>Viaggamo</Header>
                </WorkLink>
            </Project>
            <Project>
                <WorkLink to='/work/scribble'>
                    <Image src={ScribbleLogo} alt='Scribble Logo'/>
                    <Header>Scribble</Header>
                </WorkLink>
            </Project>
        </ProjectContainer>
        </>
    )
}

export default Work;

const ProjectContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

const Project = styled.div`
    margin-bottom: 25px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`
const WorkLink = styled(NavLink)`
    text-decoration: none;
`

// old width and height was 500px
const Image = styled.img`
    width: 80%;
    height: 80%;
    &:hover {
        filter: brightness(70%)
    }
    @media (max-width: 768px) {
        width: 100%;
      }
`

const Header = styled.h3`
    font-family: Assistant;
    font-weight: 600;
    font-style: normal;
    line-height: 1.6em;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    letter-spacing: .06em;
    color: #1f1f1f;
`