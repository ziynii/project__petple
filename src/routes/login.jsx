import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = ({ setShowHeaderAndNav }) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();

  const handleLoginWithEmail = () => {
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      pwRef.current.value
    );
    navigate('/home');
    setShowHeaderAndNav(true);
  };

  return (
    <div className="login-wrapper login">
      <div className="logo">
        <img src="./logo.svg" alt="로고 이미지" />
      </div>

      <div className="content">
        <h6 className="title">LOGIN</h6>

        <form className="login-form">
          <div className="input-wrap">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              className="email-input"
              ref={emailRef}
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className="input-wrap">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              className="pw-input"
              ref={pwRef}
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            onClick={handleLoginWithEmail}
          >
            로그인
          </button>
        </form>

        <div className="sns-login">
          <button type="button" className="sns-login-button github-login">
            <i className="fa-brands fa-github"></i>
          </button>
          <button type="button" className="sns-login-button google-login">
            <i className="fa-brands fa-google"></i>
          </button>
        </div>

        <button type="button" className="join-button">
          <Link to="/join">이메일로 회원가입</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
