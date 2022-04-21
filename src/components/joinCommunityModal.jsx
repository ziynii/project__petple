import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import Overlay from './overlay';

const JoinCommunityModal = ({ setIsModal, selectCommunity, user }) => {
  const [docId, setDocId] = useState('');
  const [community, setCommunity] = useState({});
  const navigate = useNavigate();

  const onClickJoinButton = () => {
    db.collection('community')
      .doc(docId)
      .update({
        member: [...community.member, user.uid],
      });

    navigate(`/community/${docId}`);
  };

  useEffect(() => {
    db.collection('community')
      .where('title', '==', selectCommunity)
      .get()
      .then((result) =>
        result.forEach((doc) => {
          setDocId(doc.id);
          setCommunity(doc.data());
        })
      );
  }, []);

  return (
    <>
      <div className="join-modal">
        <p>선택한 커뮤니티에 가입할까요?</p>
        <span>가입해야 해당 커뮤니티 게시글을 볼 수 있어요 😥</span>
        <div className="button-group">
          <button
            type="button"
            className="join-button"
            onClick={onClickJoinButton}
          >
            가입하기
          </button>
          <button
            type="button"
            className="cancle-button"
            onClick={() => setIsModal(false)}
          >
            돌아가기
          </button>
        </div>
      </div>

      <Overlay />
    </>
  );
};

export default JoinCommunityModal;
