import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome login-wrapper">
      <div className="logo">
        <img src="./logo.svg" alt="로고 이미지" />
      </div>

      <div className="content">
        <h6 className="title">WELCOME</h6>
        <p>
          반려동물과 함께하는 사람들의 공간
          <br /> ‘ PETPLE ‘ 에 오신걸 환영합니다 <br />
          <br />
          로그인 또는 회원가입 후 <br /> PETPLE 의 서비스를 이용해보세요
        </p>

        <div className="button-group">
          <button className="login-button" onClick={() => navigate('/login')}>
            로그인
          </button>
          <button className="join-button" onClick={() => navigate('/join')}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
