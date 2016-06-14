// a reducer takes in two things
// 1. the action
// 2. a copy of the current state
// reducer returns an updated copy of the store
// the first time it runs, state will be empty which is
// why we set up the default parameter

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      // return updated state
      // take the whole posts array
      // modify the likes at index passed in via the action
      // then return the new array
      return [
        ...state.slice(0, action.index), // take everything before the index we're updating
        {...state[action.index], likes: state[action.index].likes + 1}, // take a copy of the existing index but update the likes
        ...state.slice(action.index + 1), // take everything after the one we're updating
      ]
    default:
      return state;
  }
}

export default posts;
