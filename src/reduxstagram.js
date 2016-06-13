import React from 'react';
import { render } from 'react-dom';

// import styles
import './sass/main.scss';

// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// react router deps
import { Router, Route, IndexRoute } from 'react-router';
// binds react and redux
import { Provider } from 'react-redux';
// import store (default) and history (named export)
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
       <IndexRoute component={PhotoGrid} />
       <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
