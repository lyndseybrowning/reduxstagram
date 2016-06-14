import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of the post
    // accessed from URL bar
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex((post) => post.code === postId);

    // get us the post
    const post = this.props.posts[index];
    // find comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className='single-photo'>
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    );
  }
});

export default Single;
