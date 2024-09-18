import React from 'react';
import PostCard from '../Posts/Post';

const PostsContainer = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          showButtons={post.userId === 123}
        />
      ))}
    </div>
  );
};

export default PostsContainer;