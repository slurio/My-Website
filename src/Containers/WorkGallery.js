import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Work from '../Components/Work';
import WorkPage from '../Components/WorkPage';

const WorkGallery = (props) => {
    console.log(props)
    return(
        <>
            <Switch>
                <Route path={'/work/:id'} render={() => <WorkPage/>}/>
         
                <Route path={'/work'} render={() => <Work/>}/>
            </Switch>
        </>
    )
}

export default WorkGallery;