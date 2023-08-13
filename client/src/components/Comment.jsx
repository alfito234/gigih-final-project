import React from "react";

const Comment = ({ comment }) => {
  function formatDate(timestamp) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(
      new Date(timestamp)
    );
  }
  return (
    <div className='flex items-center px-4 py-2 space-x-3 leading-relaxed border-t sm:px-6 sm:py-4'>
      <img
        className='w-8 h-8 mt-2 rounded-full sm:w-10 sm:h-10'
        src='https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/bc329335-3ba7-43d2-a2ee-75162ac97055.jpg'
        alt=''
      />

      <div>
        <strong className='mr-2 text-sm'>{comment.username}</strong>
        <span className='text-xs text-gray-400'>
          {formatDate(comment.timestamp)}
        </span>
        <p className='text-sm'>{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
