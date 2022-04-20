import React from 'react';
import Overlay from './overlay';

const JoinCommunityModal = () => {
  return (
    <>
      <div className="join-modal">
        <p>선택한 커뮤니티에 가입할까요?</p>
        <span>가입해야 해당 커뮤니티 게시글을 볼 수 있어요😥</span>
        <div className="button-group">
          <button type="button" className="join-button">
            가입하기
          </button>
          <button type="button" className="cancle-button">
            돌아가기
          </button>
        </div>
      </div>

      <Overlay />
    </>
  );
};

export default JoinCommunityModal;
