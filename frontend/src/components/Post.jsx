import React from 'react';
import { Link } from "react-router-dom";
import { format } from "date-fns"; // Use 'format' instead of 'formatISO9075'

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <Link to={`/post/${_id}`} className="w-full md:w-1/3">
          <img 
            src={`http://localhost:4000/${cover}`} 
            alt={title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </Link>

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <Link to={`/post/${_id}`}>
              <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
                {title}
              </h2>
            </Link>
          </div>
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), 'yyyy-MM-dd HH:mm')}</time>
          <p className="text-gray-700 mt-2">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
