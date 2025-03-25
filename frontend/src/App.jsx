import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';  // Ensure 'Blog' starts with uppercase
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from "./pages/CreatePost";
import Layout from './Layout';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Fetch blog posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5001/post'); // Replace with your backend endpoint
        const data = await response.json();
        setPosts(data); // Assuming data is an array of blog posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route 
          path="/" 
          element={
            <>
              {posts.map(post => (
                <Blog key={post._id} {...post} />
              ))}
            </>
          } 
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
