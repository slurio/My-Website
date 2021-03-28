import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Work from './Work';
import Tool from './Tool';
import ImageGallery from '../Containers/ImageGallery';

function WorkPage(props) {

    const handlePrev = () => {
        let currentIndex = props.projects.indexOf(props.project);

        if (currentIndex !== 0) {
            let prevProject = (props.projects[currentIndex - 1]).title.toLowerCase().split(' ').join('');
            return `/work/${prevProject}`
        } else {
            let prevProject = (props.projects[props.projects.length - 1]).title.toLowerCase().split(' ').join('');
            return `/work/${prevProject}`;
        }
    }

    const handleNext = () => {
        let currentIndex = props.projects.indexOf(props.project);

        if (currentIndex !== props.projects.length - 1) {
            let prevProject = (props.projects[currentIndex + 1]).title.toLowerCase().split(' ').join('');
            return `/work/${prevProject}`
        } else {
            let prevProject = (props.projects[0]).title.toLowerCase().split(' ').join('');
            return `/work/${prevProject}`;
        }
    }

    const renderStack = () => {
        return props.project.stack.map(el => <Tool key={el} language={el}/>)
    }

    const renderImages = () => {
        let images = props.project.images
        let index = Math.floor(images.length/2);
        let columnOne;
        let ColumnTwo;
        if (images.length%2 === 0) {
            columnOne = images.slice(0, index);
            ColumnTwo = images.slice(index, images.length);
        } else {
            columnOne = images.slice(0, index + 1);
            ColumnTwo = images.slice(index + 1, images.length);
        }
        return <ImageGallery key={1} columns={[columnOne,ColumnTwo]}/>;
    }

    return(
        <>
        <WorkContainer>
            {console.log(props.project)}
            <Logo src={props.project.logo} alt='logo'/>
            <LinkContainer>
                <Link href={props.project.frontend} target='_blank'>
                    <span>Frontend</span>
                </Link>
                <Link href={props.project.backend} target='_blank'>
                    <span>Backend</span>
                </Link>
                {props.project.demo ? 
                    <Link href={props.project.demo} target='_blank'>
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
            <ImageContainer>
                {renderImages()}
            </ImageContainer>
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
    text-align: center;
    font-family: Assistant;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 100px;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    border: 2px solid black;
    color: white;
    background-color: black;
    font-size: 14px;
    font-weight: 600;
    padding: 8px;
    &:hover {
        color: white;
        background: #333;
        border: 2px solid #333;
    }
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
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8em;
    font-size: 13px;
    text-transform: none;
`

const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: auto;
    margin: 20px 0px;
`

const ImageContainer = styled.div`
    border-radius: 10px;
    padding: 35px 0px;
    margin-bottom: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`
