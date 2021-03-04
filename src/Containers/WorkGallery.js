import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Work from '../Components/Work';
import WorkPage from '../Components/WorkPage';
import BreakupSpaceLogo from '../assets/breakup_space_logo.png';

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
        }
    ];

    return(
        <>
            <Switch>
                <Route path={'/work/:id'} render={(routerProps) => {
                    let selectedProject = routerProps.match.params.id
                    
                    let foundProject = projects.find(project => project.id === selectedProject)
                    return(<WorkPage project={foundProject}/>)
                    // if (props.posts.length > 0) {
                    //     let foundPost = props.posts.find(post => post.id === id)
                    //     return (<PostPage key={foundPost.id} post={foundPost}/>)
                    // }
                }} />
         
                <Route path={'/work'} render={() => <Work/>}/>
            </Switch>
        </>
    )
}

export default WorkGallery;