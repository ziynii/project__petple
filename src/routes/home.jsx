import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/carousel';
import { db } from '../firebase';

const Home = ({ setShowHeaderAndNav, user }) => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [postIdList, setPostIdList] = useState([]);

  useEffect(() => {
    db.collection('freePosts')
      .orderBy('date', 'desc')
      .limit(5)
      .get()
      .then((result) => {
        let postListArray = [];
        let postIdListArray = [];
        result.forEach((doc) => {
          postListArray.push(doc.data());
          postIdListArray.push(doc.id);
        });
        setPostList(postListArray);
        setPostIdList(postIdListArray);
      });
  }, []);

  useEffect(() => {
    setShowHeaderAndNav(true);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="main-content home">
      <Carousel />

      <div className="main-list-box">
        <h5 className="main-list-title" onClick={() => navigate('/free')}>
          놀이터 새글 <i className="fa-solid fa-angle-right"></i>
        </h5>

        <ul className="main-list">
          {postList.map((post, i) => {
            return (
              <li
                className="main-item"
                key={postIdList[i]}
                onClick={() => navigate(`/detail/${postIdList[i]}`)}
              >
                <div className="list-align-box">
                  <p className="content">{post.content}</p>
                  <span className="likes">
                    <strong>❤</strong> {post.likes.length}
                  </span>
                </div>
                <div className="list-align-box">
                  <span className="author">{post.username}</span>
                  <span className="date">{post.date}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
