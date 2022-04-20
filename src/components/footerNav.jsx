import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FooterNav = ({ showHeaderAndNav }) => {
  const navigate = useNavigate();

  return (
    <>
      {showHeaderAndNav ? (
        <div className="footer-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/home">
                <i className="fa-solid fa-house"></i>
                <h4 className="nav-item-title">홈</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/free">
                <i className="fa-solid fa-paw"></i>
                <h4 className="nav-item-title">놀이터</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/community">
                <i className="fa-solid fa-user-group"></i>
                <h4 className="nav-item-title">커뮤니티</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="mypage">
                <i className="fa-solid fa-user"></i>
                <h4 className="nav-item-title">마이페이지</h4>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default FooterNav;
