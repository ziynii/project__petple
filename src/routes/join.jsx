import React from 'react';

const Join = (props) => {
  return (
    <div className="login-wrapper join">
      <div className="logo">
        <img src="./logo.svg" alt="로고 이미지" />
      </div>

      <div className="content">
        <h6 className="title">JOIN</h6>

        <form className="login-form">
          <div className="input-wrap">
            <i className="fa-solid fa-user"></i>
            <input type="text" className="name-input" />
          </div>

          <div className="input-wrap">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" className="email-input" />
          </div>

          <div className="input-wrap">
            <i class="fa-solid fa-lock"></i>
            <input type="password" className="pw-input" />
          </div>

          <buttton type="button" className="submit-button">
            가입하기
          </buttton>
        </form>
      </div>
    </div>
  );
};

export default Join;
