import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const Join = ({ setShowHeaderAndNav }) => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();

  const handleRegister = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        pwRef.current.value
      )
      .then((result) => {
        {
          db.collection('user').doc(result.user.uid).set({
            name: nameRef.current.value,
            email: emailRef.current.value,
            image: '',
          });
          result.user.updateProfile({ displayName: nameRef.current.value });
          navigate('/login');
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setShowHeaderAndNav(false);
  }, []);

  return (
    <div className="login-wrapper join">
      <Helmet>
        <title>회원가입 | PETPLE</title>
      </Helmet>

      <div className="logo">
        <img src="./logo.svg" alt="로고 이미지" />
      </div>

      <div className="content">
        <h6 className="title">JOIN</h6>

        <form className="login-form">
          <div className="input-wrap">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              className="name-input"
              ref={nameRef}
              placeholder="이름을 입력하세요"
            />
          </div>

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
            onClick={handleRegister}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
