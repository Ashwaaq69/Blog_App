
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";  // Ensure this exists

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);  // Set initial state to null
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/post/${id}`)
      .then(response => response.json())
      .then(postInfo => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    if (files?.[0]) {
        data.append("file", files[0]);
    }

    try {
        const response = await fetch(`http://localhost:5001/post/${id}`, {
            method: "PUT",
            body: data,
            credentials: "include",
        });

        const textResponse = await response.text();  // Log raw response
        console.log("Raw Response:", textResponse);  

        const jsonResponse = JSON.parse(textResponse);  // Try parsing as JSON
        console.log("Parsed Response:", jsonResponse);

        if (response.ok) {
            setRedirect(true);
        } else {
            console.error("Update failed:", jsonResponse);
        }
    } catch (error) {
        console.error("Error updating post:", error);
    }
}

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Post</h1>
      <form onSubmit={updatePost}>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />

        {/* Summary Input */}
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />

        {/* File Input */}
        <input
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        {/* Content Editor */}
        <div className="mb-4">
          <Editor onChange={setContent} value={content} />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPage;
