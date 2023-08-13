import React from "react";
import { useState } from "react";

function CommentForm({ handleSubmit }) {
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(newComment, username);
    setUsername("");
    setNewComment("");
  };

  return (
    <form onSubmit={onSubmit} className='mt-2'>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-full mb-1 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-0 focus:border-gray-500 focus:outline-none'
        placeholder='Write your name'
        required
      ></input>
      <div className='px-4 py-2 mb-4 bg-white border border-gray-200 rounded-lg rounded-t-lg'>
        <label htmlFor='comment' className='sr-only'>
          Your comment
        </label>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows='2'
          className='w-full px-0 text-sm text-gray-900 border-0 resize-none focus:ring-0 focus:outline-none focus:border-gray-500'
          placeholder='Write a comment...'
          required
        />
      </div>
      <button
        type='submit'
        className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-400 rounded-lg focus:ring-4 focus:ring-green-300 hover:bg-green-500'
      >
        Upload Comment
      </button>
    </form>
  );
}

export default CommentForm;
