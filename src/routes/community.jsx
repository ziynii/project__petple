import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CommunityItem from '../components/communityItem';
import CreateCommunity from '../components/createCommunity';
import JoinCommunityModal from '../components/joinCommunityModal';
import { db } from '../firebase';

const Community = ({ user }) => {
  const [communities, setCommunities] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectCommunity, setSelectCommunity] = useState('');
  const [createCommunity, setCreateCommunity] = useState(false);

  useEffect(() => {
    db.collection('community').onSnapshot((result) => {
      let communitiesArray = [];

      result.forEach((doc) => {
        communitiesArray.push(doc.data());
      });
      setCommunities(communitiesArray);
    });
  }, []);

  return (
    <div className="main-content community">
      <Helmet>
        <title>커뮤니티 | PETPLE</title>
      </Helmet>

      <div className="align-box-top">
        <div className="content-title">
          <h3 className="title">커뮤니티</h3>
          <p>채팅형 커뮤니티에서 대화를 나눠보세요 </p>
        </div>
        <button
          type="button"
          className="new-button"
          aria-label="새 커뮤니티 만들기"
          onClick={() => setCreateCommunity(true)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <ul className="community-list">
        {communities.map((community, i) => {
          return (
            <CommunityItem
              key={i}
              community={community}
              setSelectCommunity={setSelectCommunity}
              setIsModal={setIsModal}
              user={user}
            />
          );
        })}
      </ul>

      {createCommunity ? (
        <CreateCommunity user={user} setCreateCommunity={setCreateCommunity} />
      ) : null}

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
