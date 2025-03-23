import React from 'react';
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
const PostPag = () => {
    const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5001/post/${id}`)
      .then(response => response.json())
      .then(postInfo => setPostInfo(postInfo));
  }, [id]);

  if (!postInfo) return '';
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{postInfo.title}</h1>
        <time className="text-gray-500 text-sm block mb-1">{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className="text-gray-700 text-sm mb-4">by <span className="font-semibold">@{postInfo.author.username}</span></div>
        
        {userInfo.id === postInfo.author._id && (
          <div className="mb-4">
            <Link 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition" 
              to={`/edit/${postInfo._id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Edit this post
            </Link>
          </div>
        )}
  
        <div className="mb-6">
          <img className="w-full h-64 object-cover rounded-md" src={`http://localhost:5001/${postInfo.cover}`} alt="Post Cover" />
        </div>
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    );
}


export default PostPag;