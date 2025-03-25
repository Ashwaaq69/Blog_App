import React from 'react';
import Post from "../Post";
import {useEffect, useState} from "react";
const IndexPage = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5001/post').then(response => {
        response.json().then(posts => {
          setPosts(posts);
        });
      });
    }, []);
    return (
        <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
    );
};

export default IndexPage;