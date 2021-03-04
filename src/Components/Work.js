import React from 'react';
import styled from 'styled-components';
import ThreadLogo from '../assets/thread_logo.png';
import BreakupSpaceLogo from '../assets/breakup_space_logo.png';
import ViaggamoLogo from '../assets/viaggamo_logo.png';
import ScribbleLogo from '../assets/scribble_logo.png';

function Work() {
    return(
        <>
        <ProjectContainer>
            <Project>
                <Image src={BreakupSpaceLogo} alt='Breakup Space Logo'/>
                <Header>Breakup Space</Header>
            </Project>
            <Project>
                <Image src={ThreadLogo} alt='The Thread Logo'/>
                <Header>The Thread</Header>
            </Project>
            <Project>
                <Image src={ViaggamoLogo} alt='Viaggamo Logo'/>
                <Header>Viaggamo</Header>
            </Project>
            <Project>
                <Image src={ScribbleLogo} alt='Scribble Logo'/>
                <Header>Scribbles</Header>
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
   border: solid;
   margin-bottom: 50px;
   text-align: center;
`

const Image = styled.img`
    width: 459px;
    height: 459px;
`

const Header = styled.h4`
    text-transform: uppercase;
    margin-top: 10px;
`