import React, { useEffect, useState } from 'react';
import FreePost from '../components/freePost';
import UploadPostModal from '../components/uploadPostModal';
import { db } from '../firebase';

const FreePosts = ({ user }) => {
  const [isUpload, setIsUpload] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isDoc, setIsDoc] = useState({});

  const openUploadModal = () => {
    setIsUpload(true);
  };

  useEffect(() => {
    db.collection('freePosts')
      .orderBy('date','desc')
      .onSnapshot((result) => {
        let postsArray = [];
        let docsArray = [];

        result.forEach((doc) => {
          postsArray.push(doc.data());
          docsArray.push(doc);
        });

        setPosts(postsArray);
        setIsDoc(docsArray);
      });
  }, [isUpload]);

  return (
    <div className="main-content free">
      <div className="align-box-top">
        <div className="content-title">
          <h3 className="title">놀이터</h3>
          <p>모두가 자유롭게 소통하는 공간입니다</p>
        </div>
        <button
          type="button"
          className="new-button"
          aria-label="새 글쓰기"
          onClick={openUploadModal}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>

      <ul className="post-list">
        {posts?.map((post, i) => {
          return <FreePost post={post} key={i} doc={isDoc[i]} user={user} />;
        })}
      </ul>

      {isUpload ? (
        <UploadPostModal setIsUpload={setIsUpload} user={user} />
      ) : null}
    </div>
  );
};

export default FreePosts;
