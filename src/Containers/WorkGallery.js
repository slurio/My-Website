import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Work from '../Components/Work';
import WorkPage from '../Components/WorkPage';

const WorkGallery = (props) => {

    return(
        <>
            <Switch>
                <Route path={'/work/:id'} render={(routerProps) => {
                    let selectedProject = routerProps.match.params.id
                    let foundProject = props.projects.find(project => project.title.toLowerCase().split(' ').join('') === selectedProject)
                    debugger
                    return(<WorkPage project={foundProject} projects={props.projects}/>)
                }} />
         
                <Route path={'/work'} render={() => <Work/>}/>
            </Switch>
        </>
    )
}

export default WorkGallery;