import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showHeaderAndNav }) => {
  return (
    <>
      {showHeaderAndNav ? (
        <header className="header">
          <h1 className="logo">
            <Link to="/home">
              <img
                src={process.env.PUBLIC_URL + 'logo.svg'}
                alt="petple 로고"
              />
            </Link>
          </h1>
        </header>
      ) : null}
    </>
  );
};

export default Header;
