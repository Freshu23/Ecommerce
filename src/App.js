import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>hats</h1>
  </div>
) 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
      </Switch>
      
    </div>
  )
}

export default App;
