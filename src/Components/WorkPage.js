import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import githubLogo from '../assets/whiteGithub.svg';
import DemoIcon from '../assets/demo.svg';
import Work from './Work';
import Tool from './Tool';

function WorkPage(props) {

    const handlePrev = () => {
        let currentIndex = props.projects.indexOf(props.project);

        if (currentIndex !== 0) {
            let prevProject = (props.projects[currentIndex - 1]);
            return `/work/${prevProject.id}`
        } else {
            let prevProject = (props.projects[props.projects.length - 1]);
            return `/work/${prevProject.id}`;
        }
    }

    const handleNext = () => {
        let currentIndex = props.projects.indexOf(props.project);

        if (currentIndex !== props.projects.length - 1) {
            let prevProject = (props.projects[currentIndex + 1]);
            return `/work/${prevProject.id}`
        } else {
            let prevProject = (props.projects[0]);
            return `/work/${prevProject.id}`;
        }
    }

    const renderStack = () => {
        return props.project.stack.map(el => <Tool language={el}/>)
    }

    return(
        <>
        <WorkContainer>
            <Logo src={props.project.logo} alt='logo'/>
            <LinkContainer>
                <Link href={props.project.frontend} target='_blank'>
                    <Icon src={githubLogo} alt='frontend github link'/>
                    <span>Frontend</span>
                </Link>
                <Link href={props.project.backend} target='_blank'>
                    <Icon src={githubLogo} alt='backend github link'/>
                    <span>Backend</span>
                </Link>
                {props.project.demo ? 
                    <Link href={props.project.demo} target='_blank'>
                        <Icon src={DemoIcon} alt='demo link'/>
                        <span>Demo</span>
                    </Link>
                    : null
                }
            </LinkContainer>
            <Header>{props.project.title}</Header>
            <Underline></Underline>
            <ProjectBio>{props.project.bio}</ProjectBio>
            <StackContainer>
                {renderStack()}
            </StackContainer>
        </WorkContainer>
        <NavigationContainer>
            <NavigationLink to='/work'>Back to WORK</NavigationLink>
            <div>
                <NavigationLink to={handlePrev}>
                    <Span>prev </Span>
                </NavigationLink>
                /
                <NavigationLink to={handleNext}>
                    <Span> next</Span>
                </NavigationLink>
            </div>
        </NavigationContainer>
        <Work/>
        </>
    )
}

export default WorkPage;

const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid 1px;
    margin-bottom: 25px;
`

const Header = styled.h3`
    margin-top: 20px;
    margin-bottom: 18px;
    font-family: Playfair Display;
    font-weight: 700;
    font-style: normal;
    line-height: .4em;
    text-transform: none;
    text-decoration: none;
    letter-spacing: .06em;
`

const ProjectBio = styled.p`
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
    font-size: 13px;
    text-transform: none;
    text-decoration: none;
    margin: 0 0 1em;
    color: #575757;
    margin-top: 10px;
    margin-bottom: 0px;
`

const Logo = styled.img`
    width: 50%; 
`

const Underline = styled.h3`
    border-bottom: solid;
    border-color: #575757;
    width: 25px;
    margin: 0;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 350px;
    margin-top: 30px;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    margin-left: 5px;
    background-color: black;
    text-align: center;
    color: white;
    font-family: proxima-nova;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100px;
    padding: 10px;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    outline: none;
    font-size: 12px;
`

const NavigationContainer = styled.div`
    color: black;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
`

const Span = styled.span`
`

const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: #575757;
    ont-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
    font-size: 13px;
    text-transform: none;
`

const StackContainer = styled.div`
    display: flex;
    margin: 20px 0;
`

const Icon = styled.img`
    
`