import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StartScreenComp from './StartScreen/StartScreenComponent';
import BeverageComponent from './Beverage/BeverageComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={StartScreenComp} />
        <Route path="/:id" component={BeverageComponent} />
      </div>
    </Router>
  );
}

export default App;
