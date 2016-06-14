import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchedToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// injects our data from our store into the main component
// without having to pass props down every component
const App = connect(mapStateToProps, mapDispatchedToProps)(Main);

export default App;
