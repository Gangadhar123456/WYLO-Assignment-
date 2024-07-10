import React, { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
