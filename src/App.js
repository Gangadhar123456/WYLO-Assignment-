import React, { useState } from 'react';
import { PostsProvider } from './context/PostsContext';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';
import './App.css';

const App = () => {
  const [editingPost, setEditingPost] = useState(null);

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  return (
    <PostsProvider>
      <div className="App">
        <h1>Posts App</h1>
        {editingPost ? (
          <CreatePost post={editingPost} setEditingPost={setEditingPost} />
        ) : (
          <CreatePost />
        )}
        <PostsDisplay onEdit={handleEdit} />
      </div>
    </PostsProvider>
  );
};

export default App;
