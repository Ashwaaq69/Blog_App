import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFiles] = useState(null);
    const [content, setContent] = useState('');

    const createNewPost = (e) => {
        e.preventDefault();
        console.log({ title, summary, files, content });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-5">Create a New Post</h1>
            <form onSubmit={createNewPost} className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(ev) => setTitle(ev.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                    type="text" 
                    placeholder="Summary" 
                    value={summary} 
                    onChange={(ev) => setSummary(ev.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                    type="file" 
                    onChange={(ev) => setFiles(ev.target.files)}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white p-2 focus:outline-none"
                />
                <textarea 
                    placeholder="Write your post..." 
                    value={content} 
                    onChange={(ev) => setContent(ev.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
