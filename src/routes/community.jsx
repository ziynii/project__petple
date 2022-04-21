import React, { useEffect, useState } from 'react';
import CommunityItem from '../components/communityItem';
import JoinCommunityModal from '../components/joinCommunityModal';
import { db } from '../firebase';

const Community = ({ user }) => {
  const [communities, setCommunities] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectCommunity, setSelectCommunity] = useState('');

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
