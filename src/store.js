import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// default data to work with
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultstate = {
  posts,
  comments
};

// create store
const store = createStore(rootReducer, defaultState);

// create history and store export
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
