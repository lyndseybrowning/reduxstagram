import React from 'react';

const Comments = React.createClass({
  renderComments(comment, index) {

    // find the current post id in the querystring
    let { postId } = this.props.params;

    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={this.handleDelete.bind(null, postId, index)}>&times;</button>
        </p>
      </div>
    );
  },

  handleSubmit(event) {
    event.preventDefault();

    let { postId } = this.props.params;
    let author = this.refs.author.value;
    let comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  handleDelete(postId, index) {
    // index = the comment index inside comments[postId] that we want to remove
    this.props.removeComment(postId, index);
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComments)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
