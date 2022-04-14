import React from 'react';

const FooterNav = ({ showHeaderAndNav }) => {
  return (
    <>
      {showHeaderAndNav ? (
        <div className="footer-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <i className="fa-solid fa-house"></i>
              <h4 className="nav-item-title">홈</h4>
            </li>
            <li className="nav-item">
              <i className="fa-solid fa-paw"></i>
              <h4 className="nav-item-title">놀이터</h4>
            </li>
            <li className="nav-item">
              <i className="fa-solid fa-user-group"></i>
              <h4 className="nav-item-title">커뮤니티</h4>
            </li>
            <li className="nav-item">
              <i className="fa-solid fa-user"></i>
              <h4 className="nav-item-title">마이페이지</h4>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default FooterNav;
