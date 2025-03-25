import React from 'react';
import { Link } from "react-router-dom";
import { format } from "date-fns"; // Use 'format' instead of 'formatISO9075'

const blog = ({ _id, title, summary, cover, createdAt, author }) => {
  // Format the date if available, else use a fallback message
  const formattedDate = createdAt ? format(new Date(createdAt), "yyyy-MM-dd HH:mm") : "Date not available";

  // Ensure 'author' has a valid username, otherwise display 'Unknown Author'
  const authorName = author && author.username ? author.username : "Unknown Author";

  // Handle missing cover image
  const coverImage = cover ? `http://localhost:5001/${cover}` : "path/to/default-image.jpg"; // Replace with your default image path

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <Link to={`/post/${_id}`} className="w-full md:w-1/3">
          <img 
            src={coverImage} 
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
            <p className="text-gray-500 text-sm mt-1">
              by <span className="font-semibold">{authorName}</span> • {formattedDate}
            </p>
          </div>
          <p className="text-gray-700 mt-2">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default blog;
