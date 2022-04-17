import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreePost = ({ post }) => {
  const [isImageFile, setIsImageFile] = useState(false);

  useEffect(() => {
    if (post.image === '') {
      setIsImageFile(false);
    } else {
      setIsImageFile(true);
    }
  });

  return (
    <li className="post-item">
      <div className="post-info">
        <div
          className="author-image"
          style={{ backgroundImage: `url("https://via.placeholder.com/350")` }}
        ></div>
        <strong className="author-name">{post.username}</strong>
      </div>

      <Link to={`/detail/${post.uid}`}>
        <div className="post-content">
          <p className="text">{post.content}</p>
          {isImageFile ? (
            <div
              className="image"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
          ) : null}
        </div>
      </Link>

      <div className="align-box-bottom">
        <div className="post-reaction">
          <div className="total-like">
            <i className="fa-solid fa-heart"></i>
            {post.totalLike}개
          </div>
          <div className="total-comment">
            <i className="fa-solid fa-message"></i>
            {post.totalComment}개
          </div>
        </div>

        <span className="date">{post.date}</span>
      </div>
    </li>
  );
};

export default FreePost;
