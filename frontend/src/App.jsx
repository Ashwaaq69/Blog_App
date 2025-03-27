import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPag";
import EditPage from "./pages/EditPage";
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        
      </Route>
    </Routes>
  );
};

export default App;
