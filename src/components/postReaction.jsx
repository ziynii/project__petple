import React from 'react';

const PostReaction = ({ post }) => {
  return (
    <div className="post-reaction-wrap">
      <div className="post-reaction">
        <div className="total-like">
          <i className="fa-solid fa-heart"></i>
          {post?.likes?.length}개
        </div>
        <div className="total-comment">
          <i className="fa-solid fa-message"></i>
          {post?.comments?.length}개
        </div>
      </div>

      <span className="date">{post?.date}</span>
    </div>
  );
};

export default PostReaction;
