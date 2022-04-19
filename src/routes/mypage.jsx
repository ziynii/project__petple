import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Mypage = () => {
  const navigate = useNavigate();
  const [tabName, setTabName] = useState('write');
  console.log(tabName);

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <div className="main-content mypage">
      <h3 className="content-title">마이페이지</h3>

      <div className="user">
        <div className="user-left-box">
          <div
            className="user-image"
            style={{
              backgroundImage: `url("https://via.placeholder.com/350")`,
            }}
          ></div>
        </div>

        <div className="user-right-box">
          <h4 className="user-name">유저네임님</h4>
          <button type="button" className="profile-change-button">
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
            className="tab-button"
            onClick={() => setTabName('write')}
          >
            내가쓴 글 <br /> 0개
          </button>
          <button
            type="button"
            className="tab-button"
            onClick={() => setTabName('like')}
          >
            좋아한 글 <br /> 0개
          </button>
          <button
            type="button"
            className="tab-button"
            onClick={() => setTabName('community')}
          >
            내 모임 <br /> 0개
          </button>
        </div>

        {tabName === 'write' ? (
          <ul className="mypost-list">
            <li className="mypost-item">
              <p>저희 메시 예쁘지 않나요</p>
              <span className="author">메시누나</span>
              <span className="date">2022-04-19</span>
            </li>
          </ul>
        ) : null}

        {tabName === 'like' ? (
          <ul className="mypost-list">
            <li className="mypost-item">
              <p>저희 곰순이 예쁘지 않나요</p>
              <span className="author">곰순언니</span>
              <span className="date">2022-04-19</span>
            </li>
          </ul>
        ) : null}

        {tabName === 'community' ? (
          <ul className="mypost-list">
            <li className="mypost-item">
              <p>치와와 사랑해</p>
              <span>멤버수 : 26명</span>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Mypage;
