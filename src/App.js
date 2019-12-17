import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import About from './components/about';
import Home from './components/home/home';
import BrandListing from './components/brand-listing';

function App() {
  const baseUrl = 'https://backoffice.aodour.tk/';

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
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/brand/:brandID">
              <BrandListing baseUrl={baseUrl} />
            </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
