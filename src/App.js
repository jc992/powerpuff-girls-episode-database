import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Homepage from './pages/Homepage';
import EpisodeDetailsPage from './pages/EpisodeDetailsPage';
import NotFound from './pages/NotFoundPage';

import './styles/style.css';

const App = () => {

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          component={Homepage}
        />
        <Route
          path="/episodes/:season/:number"
          component={EpisodeDetailsPage}
        />
        <Route
          path="*"
          component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
