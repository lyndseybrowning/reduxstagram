import React from 'react';
import { render } from 'react-dom';

// import styles
import './sass/main.scss';

// compoments
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
     <IndexRoute component={PhotoGrid} />
     <Route path='/view/:postId' component={Single} />
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
