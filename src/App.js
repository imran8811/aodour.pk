import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import './style.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
