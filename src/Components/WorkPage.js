import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import githubLogo from '../assets/github.svg';
import DemoIcon from '../assets/demo.svg';
import Work from './Work';

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

    return(
        <>
        <WorkContainer>
            <Logo src={props.project.logo} alt='logo'/>
            <h3>{props.project.title}</h3>
            <Underline></Underline>
            <p>{props.project.bio}</p>
            <LinkContainer>
                <Link href={props.project.frontend} target='blank'>
                    <img src={githubLogo} alt='frontend github link'/>
                    <span>Frontend</span>
                </Link>
                <Link href={props.project.backend} target='blank'>
                    <img src={githubLogo} alt='backend github link'/>
                    <span>Backend</span>
                </Link>
                {props.project.demo ? 
                    <Link href={props.project.demo} target='blank'>
                        <img src={DemoIcon} alt='demo link'/>
                        <span>Demo</span>
                    </Link>
                    : null
                }
            </LinkContainer>
        </WorkContainer>
        <div>
            <NavLink to={handlePrev}>
                <span>prev</span>
            </NavLink>
            /
            <NavLink to={handleNext}>
                <span>next</span>
            </NavLink>
        </div>
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

const Logo = styled.img`
    width: 50%; 
`

const Underline = styled.h3`
    border-bottom: solid;
    width: 25px;
    margin: 0;
`

const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`

const Link = styled.a`
    text-decoration: none;
    padding-left: 10px;
`