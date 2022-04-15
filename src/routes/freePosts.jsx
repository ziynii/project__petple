import React from 'react';
import FreePost from '../components/freePost';

const FreePosts = (props) => {
  return (
    <div className="main-content free">
      <div className="title-box">
        <h3 className="title">놀이터</h3>
        <p>모두가 자유롭게 소통하는 공간입니다</p>
      </div>

      <ul className="post-list">
        <FreePost />
      </ul>
    </div>
  );
};

export default FreePosts;
