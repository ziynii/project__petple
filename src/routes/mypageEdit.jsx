import React from 'react';

const MypageEdit = ({ user }) => {
  console.log(user);

  return (
    <div className="main-content mypage-edit">
      <h3 className="content-title">프로필 수정</h3>

      <div className="edit-box">
        <p className="edit-title">프로필 사진 변경</p>
        <div
          className="preview-image"
          style={{
            backgroundImage: `url("https://via.placeholder.com/350")`,
          }}
        ></div>
        <form className="image-form">
          <input type="file" className="image-input" />
          <button className="submit-button">이미지 변경 확인</button>
        </form>
      </div>

      <div className="edit-box">
        <p className="edit-title">이름 변경</p>

        <form className="name-form">
          <input type="text" className="name-input" />
          <button className="submit-button">이름 변경 확인</button>
        </form>
      </div>

			<button className="save-button">변경내용 저장</button>
    </div>
  );
};

export default MypageEdit;
