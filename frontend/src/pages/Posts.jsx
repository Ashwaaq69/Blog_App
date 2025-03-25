import React, { useEffect, useState } from "react";
import Blog from "../components/blog"; // Ensure correct import

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/posts") // Ensure this matches your backend API
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Blog key={post._id} {...post} />
        ))
      ) : (
        <p className="text-gray-600">No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
