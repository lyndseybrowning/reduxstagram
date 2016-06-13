// a reducer takes in two things
// 1. the action
// 2. a copy of the current state
// reducer returns an updated copy of the store
// the first time it runs, state will be empty which is
// why we set up the default parameter

function posts(state = [], action) {
  console.log("the post will change");
  console.log(state, action);
  return state;
}

export default posts;
