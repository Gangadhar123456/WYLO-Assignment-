import React, { useContext } from 'react';
import PostItem from './PostItem';
import { PostsContext } from '../context/PostsContext';

const PostsDisplay = ({ onEdit }) => {
  const { posts } = useContext(PostsContext);

  return (
    <div className="posts-display">
      {posts.map(post => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PostsDisplay;
