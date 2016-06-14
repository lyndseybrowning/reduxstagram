import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// default data to work with
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

// enhance our store for redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create store
const store = createStore(rootReducer, defaultState, enhancers);

// export history and store
// history is a named export so can be called using
// desctructuring assignment
export const history = syncHistoryWithStore(browserHistory, store);


// allows us to hot reload reducers
if(module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

// export the store as the default module
// so can be called as default import
export default store;
