import React, {UseState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Work from '../Components/Work';
import WorkPage from '../Components/WorkPage';
import BreakupSpaceLogo from '../assets/breakup_space_logo.png';
import ThreadLogo from '../assets/thread_logo.png';
import ViaggamoLogo from '../assets/viaggamo_logo.png';
import ScribbleLogo from '../assets/scribble_logo.png';

const WorkGallery = () => {
    
    const projects = [
        {
            id: 'breakupspace',
            title: 'Breakup Space',
            logo: BreakupSpaceLogo,
            bio: 'Service to break the trend of ghosting',
            frontend: 'https://github.com/kevinpark07/BreakUp-Space-Frontend',
            backend: 'https://github.com/kevinpark07/Breakup-Space-Backend',
            demo: null,
        },
        {
            id: 'thethread',
            title: 'The Thread',
            logo: ThreadLogo,
            bio: "Fashion app using React Native providing users the capability to scan their clothing to learn more about what they wear.",
            frontend: 'https://github.com/slurio/TheThread-Frontend',
            backend: 'https://github.com/slurio/TheThread-Backend',
            demo: 'https://www.loom.com/share/efd8671db5d24d679f7e11427f34313a',
        },
        {
            id: 'viaggamo',
            title: 'Viaggamo',
            logo: ViaggamoLogo,
            bio: 'A language learning and translator tool using React frontend and Ruby on Rails backend.',
            frontend: 'https://github.com/slurio/Viaggiamo-Frontend',
            backend: 'https://github.com/slurio/Viaggiamo-Backend',
            demo: 'https://www.loom.com/share/2ffbf47626e7486992bf48231ef2224b',
        },
        {
            id: 'scribble',
            title: 'Scribble',
            logo: ScribbleLogo,
            bio: 'Interactive art app for users to create their own animated art.',
            frontend: 'https://github.com/slurio/Scribbles-Frontend',
            backend: 'https://github.com/slurio/Scribbles-Backend',
            demo: 'https://www.loom.com/share/b476c3a24fc84540a461f1610d0a5fbb',
        },
    ];

    // const handlePrev = (project) => {
    //     let currentIndex = projects.indexOf(project);
    //     if (currentIndex !== 0) {
    //         console.log(projects[currentIndex - 1]);
    //     } else {
    //         console.log(projects[projects.length - 1]);
    //     }
    // }

    return(
        <>
            <Switch>
                <Route path={'/work/:id'} render={(routerProps) => {
                    let selectedProject = routerProps.match.params.id
                    let foundProject = projects.find(project => project.id === selectedProject)
                    return(<WorkPage project={foundProject} projects={projects}/>)
                }} />
         
                <Route path={'/work'} render={() => <Work/>}/>
            </Switch>
        </>
    )
}

export default WorkGallery;