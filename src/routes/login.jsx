import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, githubProvider, googleProvider } from '../firebase';

const Login = ({ setShowHeaderAndNav }) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();
  const [wrongAuth, setWrongAuth] = useState(false);

  console.log(wrongAuth);

  const handleLoginWithEmail = () => {
    auth
      .signInWithEmailAndPassword(emailRef.current.value, pwRef.current.value)
      .then(() => {
        navigate('/home');
        setShowHeaderAndNav(true);
      })
      .catch(() => {
        setWrongAuth(true);
        return;
      });
  };

  const onSaveUser = (user) => {
    db.collection('user')
      .where('email', '!=', user.email)
      .get()
      .then(() => {
        db.collection('user').doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        });
      });
  };

  const goHome = () => {
    navigate('/home');
    setShowHeaderAndNav(true);
  };

  const handleLoginWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
      const user = result.user;
      onSaveUser(user);
      goHome();
    });
  };

  const handleLoginWithGithub = () => {
    auth.signInWithPopup(githubProvider).then((result) => {
      const user = result.user;
      onSaveUser(user);
      goHome();
    });
  };

  useEffect(() => {
    setShowHeaderAndNav(false);
  }, []);

  return (
    <div className="login-wrapper login">
      <Helmet>
        <title>로그인 | PETPLE</title>
      </Helmet>

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

        {wrongAuth === true ? (
          <p className="error-text">❗ 로그인 정보가 맞지 않아요 😅 ❗</p>
        ) : null}

        <div className="sns-login">
          <button
            type="button"
            className="sns-login-button github-login"
            onClick={handleLoginWithGithub}
          >
            <i className="fa-brands fa-github"></i>
          </button>
          <button
            type="button"
            className="sns-login-button google-login"
            onClick={handleLoginWithGoogle}
          >
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
