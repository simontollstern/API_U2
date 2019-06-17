import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StartScreenComp from './StartScreen/StartScreenComponent';
import BeverageComponent from './Beverage/BeverageComponent';
import ReviewComponent from './Review/ReviewComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={StartScreenComp} />
        <Route path="/beverage/:id" component={BeverageComponent} />
        <Route path="/review/:id" component={ReviewComponent} />
      </div>
    </Router>
  );
}

export default App;
