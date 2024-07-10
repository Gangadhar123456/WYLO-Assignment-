import React, { useState, useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

const CreatePost = ({ post, setEditingPost }) => {
  const { addPost, updatePost } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      updatePost({ ...post, title, content, image });
      setEditingPost(null);
    } else {
      if (feedback.name && feedback.email && feedback.message) {
        addPost({ title, content, image, feedback });
      } else {
        alert('Please fill in all fields for feedback.');
      }
    }
    setTitle('');
    setContent('');
    setImage(null);
    setFeedback({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">{post ? 'Update Post' : 'Create Post'}</button>
      </form>
      
      <h2>Provide Feedback:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleFeedbackChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleFeedbackChange}
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={feedback.message}
          onChange={handleFeedbackChange}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default CreatePost;
