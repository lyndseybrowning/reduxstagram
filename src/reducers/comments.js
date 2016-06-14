function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return existing state with the new comment
      return [
        ...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite post with a new one
      // we send in all of the existing comments
      // and postComments handles it by using existing state
      // with a newly generated object for the new comment
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
