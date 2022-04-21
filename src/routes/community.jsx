import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinCommunityModal from '../components/joinCommunityModal';
import { db } from '../firebase';

const Community = ({ user }) => {
  const [communities, setCommunities] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectCommunity, setSelectCommunity] = useState('');
  const [docId, setDocId] = useState('');
  const navigate = useNavigate();

  console.log(docId);

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

  useEffect(() => {
    db.collection('community')
      .get()
      .then((result) => {
        let communitiesArray = [];

        result.forEach((doc) => {
          communitiesArray.push(doc.data());
        });
        setCommunities(communitiesArray);
      });
  }, []);

  return (
    <div className="main-content community">
      <div className="content-title">
        <h3 className="title">커뮤니티</h3>
        <p>커뮤니티에 가입해 다양한 정보를 나눠보세요</p>
      </div>

      <ul className="community-list">
        {communities.map((community, i) => {
          return (
            <li
              key={i}
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
                <strong>{community.member.length}명</strong>의 펫플러가 함께하고
                있어요!
              </p>
            </li>
          );
        })}
      </ul>

      {isModal ? (
        <JoinCommunityModal
          setIsModal={setIsModal}
          selectCommunity={selectCommunity}
          user={user}
        />
      ) : null}
    </div>
  );
};

export default Community;
