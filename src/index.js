import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/font/Assistant-VariableFont_wght.ttf';
import ScrollToTop from '../../Components/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


