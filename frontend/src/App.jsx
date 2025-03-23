import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';  // Ensure 'Blog' starts with uppercase
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from "./pages/CreatePost";
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route 
          path="/" 
          element={
            <>
              
              <Blog />
              <Blog />
              <Blog />
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






