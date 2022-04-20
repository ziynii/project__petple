import React, { useEffect, useState } from 'react';
import JoinCommunityModal from '../components/joinCommunityModal';
import { db } from '../firebase';

const Community = (props) => {
  const [communities, setCommunities] = useState([]);

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
                <strong>26명</strong>의 펫플러가 함께하고 있어요!
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Community;
