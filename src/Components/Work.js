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
                <NavLink to='/work/breakupspace'>
                    <Image src={BreakupSpaceLogo} alt='Breakup Space Logo'/>
                    <Header>Breakup Space</Header>
                </NavLink>
            </Project>
            <Project>
                <NavLink to='/work/thethread'>
                    <Image src={ThreadLogo} alt='The Thread Logo'/>
                    <Header>The Thread</Header>
                </NavLink>
            </Project>
            <Project>
                <NavLink to='/work/viaggamo'>
                    <Image src={ViaggamoLogo} alt='Viaggamo Logo'/>
                    <Header>Viaggamo</Header>
                </NavLink>
            </Project>
            <Project>
                <NavLink to='/work/scribble'>
                    <Image src={ScribbleLogo} alt='Scribble Logo'/>
                    <Header>Scribble</Header>
                </NavLink>
            </Project>
        </ProjectContainer>
        </>
    )
}

export default Work;

const ProjectContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const Project = styled.div`
    margin-bottom: 50px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`

const Image = styled.img`
    width: 459px;
    height: 459px;
`

const Header = styled.h3`
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    margin-top: 10px;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: .06em;
`