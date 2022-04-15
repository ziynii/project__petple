import React from 'react';

const FreePost = (props) => {
  return (
    <li className="post-item">
      <div className="post-info">
        <div
          className="author-image"
          style={{ backgroundImage: `url("https://via.placeholder.com/350")` }}
        ></div>
        <strong className="author-name">뎐구</strong>
      </div>

      <p className="post-content">저희 강아지 너무 귀엽지 않나요 하트하트</p>

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

        <span className="date">2022-04-15</span>
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
