import React from 'react';

const FreePost = (props) => {
  return (
    <li className="post-item">
      <div className="post-info">
        <div className="user-image"></div>
        <strong className="post-title"></strong>
        <span className="date"></span>
      </div>

      <p className="content"></p>

      <div className="post-reaction">
        <span className="total-like"></span>
        <span className="total-comment"></span>
      </div>

      <div className="my-reaction">
        <button type="button" className="is-like">
          <i className="fa-solid fa-heart"></i>
        </button>
        <button type="button" className="is-comment">
          <i className="fa-solid fa-message"></i>
        </button>
      </div>
    </li>
  );
};

export default FreePost;
