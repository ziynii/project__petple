import React from 'react';
import FreePost from '../components/freePost';

const FreePosts = (props) => {
  return (
    <div className="main-content free">
      <div className="align-box-top">
        <div className="conent-title">
          <h3 className="title">놀이터</h3>
          <p>모두가 자유롭게 소통하는 공간입니다</p>
        </div>
        <button
          type="button"
          className="new-post-button"
          aria-label="새 글쓰기"
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>

      <ul className="post-list">
        <FreePost />
      </ul>
    </div>
  );
};

export default FreePosts;
