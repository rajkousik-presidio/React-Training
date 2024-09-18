import React from 'react';
import data from './data/posts.json';
import PostsContainer from './components/PostContainer/PostContainer';


const App = () => {
  const { posts, total } = data;

  return (
    <div className="app">
      <h1>Total Posts: {total}</h1>
      <PostsContainer posts={posts} />
    </div>
  );
};

export default App;