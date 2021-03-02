import React from 'react';
import styled from 'styled-components';
import ThreadLogo from '../assets/thread_logo.png'

function Work() {
    return(
        <>
        <ProjectContainer>
            <Project>
                <Image src={ThreadLogo} alt='The Thread Logo'/>
                <Header>The Thread</Header>
            </Project>
            <Project>
                <Image src={ThreadLogo} alt='The Thread Logo'/>
            </Project>
            <Project>
                <Image src={ThreadLogo} alt='The Thread Logo'/>
            </Project>
            <Project>
                <Image src={ThreadLogo} alt='The Thread Logo'/>
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
    margin 50px 115px;
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