import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className="login-wrapper login">
      <div className="logo">
        <img src="./logo.svg" alt="로고 이미지" />
      </div>

      <div className="content">
        <h6 className="title">LOGIN</h6>

        <form className="login-form">
          <div className="input-wrap">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" className="email-input" />
          </div>

          <div className="input-wrap">
            <i class="fa-solid fa-lock"></i>
            <input type="password" className="pw-input" />
          </div>
        </form>

        <div className="sns-login">
          <button type="button" className="sns-login-button github-login">
            <i className="fa-brands fa-github"></i>
          </button>
          <button type="button" className="sns-login-button google-login">
            <i class="fa-brands fa-google"></i>
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
