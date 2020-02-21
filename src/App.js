import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Body from './components/Body';








function App() {



  return (
    <Router>
      <div className="app_holder">
        <Body />     
      </div>
    </Router>

  );
}

export default App;
