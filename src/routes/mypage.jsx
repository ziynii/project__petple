import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const Mypage = () => {
  const navigate = useNavigate();
  const [tabName, setTabName] = useState('write');
  const [likes, setLikes] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [myCommunity, setMyCommunity] = useState([]);
  const [myPostsDocId, setMyPostsDocId] = useState([]);
  const [likesDocId, setLikesDocId] = useState([]);
  const [communityDocId, setCommunityDocId] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    db.collection('freePosts')
      .where('uid', '==', user?.uid)
      .get()
      .then((result) => {
        let myPostsArray = [];
        let docIdArray = [];
        result.forEach((doc) => {
          myPostsArray.push(doc.data());
          docIdArray.push(doc.id);
        });
        setMyPosts(myPostsArray);
        setMyPostsDocId(docIdArray);
      });
  }, []);

  useEffect(() => {
    db.collection('freePosts')
      .where('likes', 'array-contains', user.uid)
      .get()
      .then((result) => {
        let myLikesArray = [];
        let docIdArray = [];
        result.forEach((doc) => {
          myLikesArray.push(doc.data());
          docIdArray.push(doc.id);
        });
        setLikes(myLikesArray);
        setLikesDocId(docIdArray);
      });
  }, []);

  useEffect(() => {
    db.collection('community')
      .where('member', 'array-contains', user.uid)
      .get()
      .then((result) => {
        let myCommunityArray = [];
        let docIdArray = [];
        result.forEach((doc) => {
          myCommunityArray.push(doc.data());
          docIdArray.push(doc.id);
        });
        setMyCommunity(myCommunityArray);
        setCommunityDocId(docIdArray);
      });
  }, []);

  return (
    <div className="main-content mypage">
      <h3 className="content-title">마이페이지</h3>

      <div className="user">
        <div className="user-left-box">
          <div
            className="user-image"
            style={{
              backgroundImage: `url(${
                user?.photoURL == null
                  ? '/imgs/default-image.png'
                  : user.photoURL
              })`,
            }}
          ></div>
        </div>

        <div className="user-right-box">
          <h4 className="user-name">{user?.displayName}님</h4>
          <button
            type="button"
            className="profile-change-button"
            onClick={() => navigate('/mypage/edit')}
          >
            프로필 수정
          </button>
          <button
            type="button"
            className="logout-button"
            onClick={() => handleLogout()}
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="mypost">
        <div className="button-group">
          <button
            type="button"
            className={"tab-button" + (tabName === 'write' ? ' is-active' : '')}
            onClick={() => setTabName('write')}
          >
            <strong>내가쓴 글 </strong>
            <br /> {myPosts.length}개
          </button>
          <button
            type="button"
            className={"tab-button" + (tabName === 'like' ? ' is-active' : '')}
            onClick={() => setTabName('like')}
          >
            <strong>좋아한 글</strong> <br /> {likes.length}개
          </button>
          <button
            type="button"
            className={"tab-button" + (tabName === 'community' ? ' is-active' : '')}
            onClick={() => setTabName('community')}
          >
            <strong>내 모임</strong> <br /> {myCommunity.length}개
          </button>
        </div>

        {tabName === 'write' ? (
          <ul className="mypost-list">
            {myPosts.map((post, i) => {
              return (
                <li
                  className="mypost-item"
                  onClick={() => navigate(`/detail/${myPostsDocId[i]}`)}
                  key={i}
                >
                  <p>{post.content}</p>
                  <span className="author">{post.username}</span>
                  <span className="date">{post.date}</span>
                </li>
              );
            })}
          </ul>
        ) : null}

        {tabName === 'like' ? (
          <ul className="mypost-list">
            {likes.map((post, i) => {
              return (
                <li
                  className="mypost-item"
                  onClick={() => navigate(`/detail/${likesDocId[i]}`)}
                  key={i}
                >
                  <p>{post.content}</p>
                  <span className="author">{post.username}</span>
                  <span className="date">{post.date}</span>
                </li>
              );
            })}
          </ul>
        ) : null}

        {tabName === 'community' ? (
          <ul className="mypost-list">
            {myCommunity.map((community, i) => {
              return (
                <li
                  className="mypost-item"
                  onClick={() => navigate(`/community/${communityDocId[i]}`)}
                  key={i}
                >
                  <p>{community.title}</p>
                  <span className="author">{community.caption}</span>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Mypage;
