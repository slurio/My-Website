import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Work from './Components/Work';
import WorkGallery from './Containers/WorkGallery';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path={'/work'} render={() => <WorkGallery/>}/>
        <Route path={'/aboutme'} render={() => <AboutMe/>}/>
        <Route path={'/contact'} render={() => <Contact/>}/>
        <Route path={'/'} render={() => <Work/>}/>
      </Switch>
    </>
  );
}

export default App;
