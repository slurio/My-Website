import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Work from './Components/Work';
import WorkGallery from './Containers/WorkGallery';
import AboutMe from './Components/AboutMe';

// use material UI
// routes
// have hidden right nav bar ?
// include work tab / about me tab / fashion tab / resume tab / contact tab(email)

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path={'/work'} render={() => <WorkGallery/>}/>
        <Route path={'/aboutme'} render={() => <AboutMe/>}/>
        <Route path={'/'} render={() => <Work/>}/>
      </Switch>
    </>
  );
}

export default App;
