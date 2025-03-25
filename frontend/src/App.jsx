import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Blog from './components/Post'; // Ensure Blog starts with uppercase
import Login from './pages/Login';
import PostPag from './pages/PostPag';
// import Posts from './pages/Posts'; 
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Posts />} />  */}
        <Route path="/post/:id" element={<PostPag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default App;
