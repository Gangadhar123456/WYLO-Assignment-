import React, { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

const PostItem = ({ post, onEdit }) => {
  const { deletePost } = useContext(PostsContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" style={{ maxWidth: '100%' }} />}
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={handleDelete} style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}>Delete</button>
    </div>
  );
};

export default PostItem;
