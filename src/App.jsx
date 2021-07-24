import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import styled from '@emotion/styled';
import GlobalStyled from './shared/styles/Reset';
import Home from './pages/Home';

const App = () => {
  return (
    <GlobalStyled>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home/:id?" component={Home} />
        </Switch>
      </Router>
    </GlobalStyled>
  );
};

export default App;
