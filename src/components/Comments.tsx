"use client";
import { useState, FormEvent } from "react";

type Comment = {
  text: string;
  rating: number;
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]); //? To store comments
  const [comment, setComment] = useState<string>(""); //? For input field
  const [rating, setRating] = useState<number>(0); //? For star rating

  //! Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() && rating > 0) {
      setComments([...comments, { text: comment, rating }]); //* Add new comment with rating
      setComment(""); //* Clear input field
      setRating(0); //* Reset rating
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Comments
      </h2>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((cmt, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-700 break-words">{cmt.text}</p>
              <div className="flex items-center mt-2">
                {Array.from({ length: cmt.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    &#9733;
                  </span> // Star icon
                ))}
                {Array.from({ length: 5 - cmt.rating }, (_, i) => (
                  <span key={i + cmt.rating} className="text-gray-300 text-lg">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mt-8">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white resize-none shadow-sm"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        ></textarea>

        <div className="flex items-center mt-4">
          <span className="text-gray-600 mr-4">Rate:</span>
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`text-lg ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
            >
              &#9733;
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-pink-400 text-white text-lg font-medium rounded-md hover:bg-pink-600 transition-all duration-300 w-full md:w-auto shadow-lg"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
