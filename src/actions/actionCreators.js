// incremement like
export default function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export default function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export default function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
