import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostCard = ({ post, showButtons }) => {
    return (
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="reactions">
          <div className="likes">
            <FaThumbsUp /> {post.reactions.likes}
          </div>
          <div className="dislikes">
            <FaThumbsDown /> {post.reactions.dislikes}
          </div>
        </div>
        <div className="views">Views: {post.views}</div>
        {showButtons && (
          <div className="buttons">
            <button className="button edit-button">Edit</button>
            <button className="button delete-button">Delete</button>
          </div>
        )}
      </div>
    );
  };

  export default PostCard;
  