import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const CommunityItem = ({ community, setSelectCommunity, setIsModal, user }) => {
  const navigate = useNavigate();
  const [docId, setDocId] = useState('');

  const onClickItem = (community) => {
    db.collection('community')
      .where('title', '==', community.title)
      .get()
      .then(
        (result) =>
          result.forEach((doc) => {
            setDocId(doc.id);
          }),
        db
          .collection('community')
          .where('member', 'array-contains', user.uid)
          .get()
          .then((result) => {
            let titleArray = [];
            result.forEach((doc) => {
              titleArray.push(doc.data().title);
            });
            if (titleArray.includes(community.title)) {
              navigate(`/community/${docId}`);
            } else {
              setSelectCommunity(community.title);
              setIsModal(true);
            }
          })
      );
  };

  return (
    <li
      onClick={() => onClickItem(community)}
      className="community-item"
      style={{
        background: `linear-gradient(to top right, ${community.color}, #fff)`,
      }}
    >
      <div className="textbox">
        <h4 className="title">{community.title}</h4>
        <p className="caption">{community.caption}</p>
      </div>

      <p className="member">
        <strong>{community.member.length}명</strong>의 펫플러가 함께하고 있어요!
      </p>
    </li>
  );
};

export default CommunityItem;
