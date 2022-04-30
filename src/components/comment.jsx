import React from 'react';

const Comment = ({ comment, userImage }) => {
  return (
    <li className="comment-item">
      <div className="comment-user">
        <div
          className="user-image"
          style={{
            backgroundImage: `url(${
              userImage == '' ? '/imgs/default-image.png' : userImage
            })`,
          }}
        ></div>
        <strong className="user-name">{comment.name}</strong>
      </div>
      <div className="comment-info">
        <p className="content">{comment.content} </p>
        <span className="date">{comment.date}</span>
      </div>
    </li>
  );
};

export default Comment;
