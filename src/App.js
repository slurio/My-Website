import React, {useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import SocialLinks from './Components/SocialLinks';

import WorkGallery from './Containers/WorkGallery';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  const [projects,setProjects] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/slurio/demo/projects')
      .then(resp => resp.json())
      .then(projects => setProjects(projects))
  }, []);

  return (
    <>
      <NavBar/>
      <Switch>
        <Route path={'/aboutme'} render={() => <AboutMe/>}/>
        <Route path={'/contact'} render={() => <Contact/>}/>
        <Route path={'/'} render={() => <WorkGallery projects={projects}/>}/>
      </Switch>
      {screenWidth <= 590 ? <SocialLinks/> : <div style={{display: 'none'}}><SocialLinks/></div>}
    </>
  );
}

export default App;
