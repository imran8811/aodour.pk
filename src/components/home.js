import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './header'
import HomeSlider from './home-slider';

function Home() {
  return (
    <Fragment>
      <Header />
      <HomeSlider/>
    </Fragment>
  );
}

export default Home;
