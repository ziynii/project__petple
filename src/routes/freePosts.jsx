import React, { useEffect, useState } from 'react';
import FreePost from '../components/freePost';
import { db } from '../firebase';

const FreePosts = ({ user }) => {
  const [isUpload, setIsUpload] = useState(false);
  const [posts, setPosts] = useState([]);

  const openUploadModal = () => {
    setIsUpload(true);
  };

  useEffect(() => {
    db.collection('freePosts')
      .get()
      .then((result) => {
        let postsArray = [];
        result.forEach((doc) => {
          postsArray.push(doc.data());
        });
        setPosts(postsArray);
      });
  }, [isUpload]);

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
          onClick={openUploadModal}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>

      <ul className="post-list">
        {posts?.map((post, i) => {
          return <FreePost post={post} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default FreePosts;
