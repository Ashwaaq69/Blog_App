import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5001/post/' + id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = await fetch('http://localhost:5001/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/post/' + id} />;
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
          onChange={ev => setTitle(ev.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        
        {/* Summary Input */}
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={ev => setSummary(ev.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />

        {/* File Input */}
        <input
          type="file"
          onChange={ev => setFiles(ev.target.files)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        {/* Editor for Content */}
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
