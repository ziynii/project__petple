import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showHeaderAndNav }) => {
  return (
    <>
      {showHeaderAndNav ? (
        <header className="header">
          <h1 className="logo">
            <Link to="/main">
              <img src="/logo.svg" alt="petple 로고" />
            </Link>
          </h1>

          <button
            type="button"
            className="chat-button"
            aria-label="채팅페이지로 이동"
          >
            <i className="fa-regular fa-comments"></i>
          </button>
        </header>
      ) : null}
    </>
  );
};

export default Header;
