import React from 'react';

const FreePost = ({ post }) => {
  return (
    <li className="post-item">
      <div className="post-info">
        <div
          className="author-image"
          style={{ backgroundImage: `url("https://via.placeholder.com/350")` }}
        ></div>
        <strong className="author-name">{post.username}</strong>
      </div>

      <p className="post-content">{post.content}</p>
      <div
        className="image"
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>

      <div className="align-box-bottom">
        <div className="post-reaction">
          <div className="total-like">
            <i className="fa-solid fa-heart"></i>
            8개
          </div>
          <div className="total-comment">
            <i className="fa-solid fa-message"></i>
            14개
          </div>
        </div>

        <span className="date">{post.date}</span>
      </div>

      {/* <div className="my-reaction">
        <button type="button" className="is-like">
          <i className="fa-solid fa-heart"></i>
          <span>좋아요</span>
        </button>
        <button type="button" className="is-comment">
          <i className="fa-solid fa-message"></i>
          <span>댓글</span>
        </button>
      </div> */}
    </li>
  );
};

export default FreePost;
