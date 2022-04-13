import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="petple 로고" />
        </Link>
      </div>

      <button
        type="button"
        className="chat-button"
        aria-label="채팅페이지로 이동"
      >
        <i className="fa-regular fa-comments"></i>
      </button>
    </header>
  );
};

export default Header;
