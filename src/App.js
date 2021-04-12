import React, {useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Work from './Components/Work';
import WorkGallery from './Containers/WorkGallery';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  const [projects,setProjects] = useState([]);

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/slurio/demo/projects')
      .then(resp => resp.json())
      .then(projects => setProjects(projects))
  }, []);

  return (
    <>
      <NavBar/>
      <Switch>
        {/* <Route path={'/work'} render={() => <WorkGallery projects={projects}/>}/> */}
        <Route path={'/aboutme'} render={() => <AboutMe/>}/>
        <Route path={'/contact'} render={() => <Contact/>}/>
        <Route path={'/'} render={() => <WorkGallery projects={projects}/>}/>
      </Switch>
    </>
  );
}

export default App;
