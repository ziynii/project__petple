import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostReaction from './postReaction';

const FreePost = ({ post, doc }) => {
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

      <Link to={`/detail/${doc.id}`}>
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

      <PostReaction />
    </li>
  );
};

export default FreePost;
