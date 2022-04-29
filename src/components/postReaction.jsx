import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const PostReaction = ({ post, user }) => {
  const [isLike, setIsLike] = useState(false);
  const likes = post?.likes;

  useEffect(() => {
    if (likes?.includes(user.uid)) {
      setIsLike(true);
    }
  }, [likes]);

  return (
    <div className="post-reaction">
      <div className={'total-like' + (isLike === true ? ' is-active' : '')}>
        <i className="fa-solid fa-heart"></i>
        {post?.likes?.length}개
      </div>

      <span className="date">{post?.date}</span>
    </div>
  );
};

export default PostReaction;
